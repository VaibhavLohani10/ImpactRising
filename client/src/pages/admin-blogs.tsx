import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, XCircle, Eye, Edit, Trash2, Calendar, User, AlertCircle } from "lucide-react";
import type { BlogPost } from "@shared/schema";

export default function AdminBlogs() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [selectedStatus, setSelectedStatus] = useState<string>("pending");
  const [rejectionReason, setRejectionReason] = useState("");

  const { data: allBlogsData, isLoading } = useQuery<{ blogPosts: BlogPost[] }>({
    queryKey: ["/api/admin/blogs"],
  });

  const { data: pendingBlogsData } = useQuery<{ blogPosts: BlogPost[] }>({
    queryKey: ["/api/admin/blogs", { status: "pending" }],
    queryFn: () => fetch("/api/admin/blogs?status=pending").then(res => res.json()),
  });

  const { data: publishedBlogsData } = useQuery<{ blogPosts: BlogPost[] }>({
    queryKey: ["/api/admin/blogs", { status: "published" }],
    queryFn: () => fetch("/api/admin/blogs?status=published").then(res => res.json()),
  });

  const approveMutation = useMutation({
    mutationFn: async (id: string) => {
      const response = await fetch(`/api/admin/blogs/${id}/approve`, {
        method: "PUT",
      });
      if (!response.ok) throw new Error("Failed to approve");
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Blog post approved",
        description: "The blog post has been published successfully.",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/blogs"] });
      queryClient.invalidateQueries({ queryKey: ["/api/blogs"] });
    },
  });

  const rejectMutation = useMutation({
    mutationFn: async ({ id, reason }: { id: string; reason: string }) => {
      const response = await fetch(`/api/admin/blogs/${id}/reject`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reason }),
      });
      if (!response.ok) throw new Error("Failed to reject");
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Blog post rejected",
        description: "The blog post has been rejected.",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/blogs"] });
      setRejectionReason("");
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const response = await fetch(`/api/admin/blogs/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete");
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Blog post deleted",
        description: "The blog post has been permanently deleted.",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/blogs"] });
      queryClient.invalidateQueries({ queryKey: ["/api/blogs"] });
    },
  });

  const formatDate = (date: Date | null) => {
    if (!date) return "";
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "published": return "bg-green-100 text-green-800";
      case "pending": return "bg-yellow-100 text-yellow-800";
      case "rejected": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const pendingBlogs = pendingBlogsData?.blogPosts || [];
  const publishedBlogs = publishedBlogsData?.blogPosts || [];
  const allBlogs = allBlogsData?.blogPosts || [];

  if (isLoading) {
    return (
      <div className="pt-16 min-h-screen" data-testid="admin-blogs-loading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-muted-foreground">Loading blog management...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-muted/30" data-testid="admin-blogs-page">
      {/* Header */}
      <section className="py-12 bg-background border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4" data-testid="admin-title">
              Blog <span className="font-script text-primary">Management</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="admin-subtitle">
              Review, approve, and manage blog posts submitted by the community.
            </p>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2">{pendingBlogs.length}</div>
                <div className="text-sm text-muted-foreground">Pending Review</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">{publishedBlogs.length}</div>
                <div className="text-sm text-muted-foreground">Published</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">{allBlogs.length}</div>
                <div className="text-sm text-muted-foreground">Total Posts</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Management Tabs */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="pending" className="space-y-6" data-testid="admin-tabs">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="pending" className="flex items-center gap-2">
                <AlertCircle className="h-4 w-4" />
                Pending ({pendingBlogs.length})
              </TabsTrigger>
              <TabsTrigger value="published" className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                Published ({publishedBlogs.length})
              </TabsTrigger>
              <TabsTrigger value="all" className="flex items-center gap-2">
                <Eye className="h-4 w-4" />
                All Posts ({allBlogs.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="pending" className="space-y-6">
              <div className="text-center text-muted-foreground mb-6">
                <p>Review and approve blog posts submitted by the community.</p>
              </div>
              {pendingBlogs.length === 0 ? (
                <div className="text-center py-12">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">All caught up!</h3>
                  <p className="text-muted-foreground">No pending blog posts to review.</p>
                </div>
              ) : (
                <div className="grid gap-6">
                  {pendingBlogs.map((post) => (
                    <BlogPostCard
                      key={post.id}
                      post={post}
                      onApprove={() => approveMutation.mutate(post.id)}
                      onReject={(reason) => rejectMutation.mutate({ id: post.id, reason })}
                      onDelete={() => deleteMutation.mutate(post.id)}
                      showActions={true}
                      rejectionReason={rejectionReason}
                      setRejectionReason={setRejectionReason}
                    />
                  ))}
                </div>
              )}
            </TabsContent>

            <TabsContent value="published" className="space-y-6">
              <div className="text-center text-muted-foreground mb-6">
                <p>Manage currently published blog posts.</p>
              </div>
              <div className="grid gap-6">
                {publishedBlogs.map((post) => (
                  <BlogPostCard
                    key={post.id}
                    post={post}
                    onDelete={() => deleteMutation.mutate(post.id)}
                    showActions={false}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="all" className="space-y-6">
              <div className="text-center text-muted-foreground mb-6">
                <p>View all blog posts across all statuses.</p>
              </div>
              <div className="grid gap-6">
                {allBlogs.map((post) => (
                  <BlogPostCard
                    key={post.id}
                    post={post}
                    onApprove={post.status === "pending" ? () => approveMutation.mutate(post.id) : undefined}
                    onReject={post.status === "pending" ? (reason) => rejectMutation.mutate({ id: post.id, reason }) : undefined}
                    onDelete={() => deleteMutation.mutate(post.id)}
                    showActions={post.status === "pending"}
                    rejectionReason={rejectionReason}
                    setRejectionReason={setRejectionReason}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}

interface BlogPostCardProps {
  post: BlogPost;
  onApprove?: () => void;
  onReject?: (reason: string) => void;
  onDelete?: () => void;
  showActions: boolean;
  rejectionReason?: string;
  setRejectionReason?: (reason: string) => void;
}

function BlogPostCard({ post, onApprove, onReject, onDelete, showActions, rejectionReason = "", setRejectionReason }: BlogPostCardProps) {
  const formatDate = (date: Date | null) => {
    if (!date) return "";
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short", 
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "published": return "bg-green-100 text-green-800";
      case "pending": return "bg-yellow-100 text-yellow-800";
      case "rejected": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="overflow-hidden" data-testid={`admin-blog-card-${post.id}`}>
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Badge className={getStatusColor(post.status)} data-testid="blog-status">
                {post.status.toUpperCase()}
              </Badge>
              <Badge variant="outline" data-testid="blog-category">
                {post.category || "General"}
              </Badge>
              {post.viewCount && post.viewCount > 0 && (
                <div className="flex items-center text-xs text-muted-foreground" data-testid="blog-views">
                  <Eye className="h-3 w-3 mr-1" />
                  {post.viewCount} views
                </div>
              )}
            </div>
            <CardTitle className="text-xl mb-2" data-testid="blog-title">{post.title}</CardTitle>
            {post.excerpt && (
              <CardDescription className="line-clamp-2" data-testid="blog-excerpt">
                {post.excerpt}
              </CardDescription>
            )}
          </div>
          {post.featuredImage && (
            <img
              src={post.featuredImage}
              alt={post.title}
              className="w-24 h-24 object-cover rounded-lg ml-4"
              data-testid="blog-thumbnail"
            />
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center" data-testid="blog-author-info">
              <User className="h-4 w-4 mr-1" />
              {post.authorName} ({post.authorEmail})
            </div>
            <div className="flex items-center" data-testid="blog-date-info">
              <Calendar className="h-4 w-4 mr-1" />
              {formatDate(post.createdAt)}
            </div>
          </div>
        </div>

        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4" data-testid="blog-tags">
            {post.tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                #{tag}
              </Badge>
            ))}
          </div>
        )}

        <div className="text-sm text-muted-foreground mb-4 line-clamp-3" data-testid="blog-content-preview">
          {post.content.substring(0, 200)}...
        </div>

        {showActions && (onApprove || onReject) && (
          <div className="flex items-center gap-2 pt-4 border-t">
            {onApprove && (
              <Button
                onClick={onApprove}
                size="sm"
                className="bg-green-600 hover:bg-green-700"
                data-testid="approve-button"
              >
                <CheckCircle className="h-4 w-4 mr-2" />
                Approve
              </Button>
            )}
            
            {onReject && setRejectionReason && (
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="destructive"
                    size="sm"
                    data-testid="reject-button"
                  >
                    <XCircle className="h-4 w-4 mr-2" />
                    Reject
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Reject Blog Post</DialogTitle>
                    <DialogDescription>
                      Please provide a reason for rejecting this blog post. This will help the author understand what needs to be improved.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-2">
                    <Label htmlFor="rejection-reason">Rejection Reason</Label>
                    <Textarea
                      id="rejection-reason"
                      placeholder="e.g., Content needs to be more relevant to our mission, requires better formatting, etc."
                      value={rejectionReason}
                      onChange={(e) => setRejectionReason(e.target.value)}
                      data-testid="rejection-reason-input"
                    />
                  </div>
                  <DialogFooter>
                    <Button
                      variant="destructive"
                      onClick={() => onReject(rejectionReason)}
                      disabled={!rejectionReason.trim()}
                      data-testid="confirm-reject-button"
                    >
                      Reject Post
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            )}

            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open(`/blog/${post.slug}`, '_blank')}
              data-testid="preview-button"
            >
              <Eye className="h-4 w-4 mr-2" />
              Preview
            </Button>
          </div>
        )}

        {onDelete && (
          <div className="flex justify-end pt-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-destructive hover:text-destructive"
                  data-testid="delete-button"
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Delete Blog Post</DialogTitle>
                  <DialogDescription>
                    Are you sure you want to permanently delete this blog post? This action cannot be undone.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button
                    variant="destructive"
                    onClick={onDelete}
                    data-testid="confirm-delete-button"
                  >
                    Delete Permanently
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        )}
      </CardContent>
    </Card>
  );
}