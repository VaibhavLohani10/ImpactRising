import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, Eye, Edit3 } from "lucide-react";
import type { BlogPost } from "@shared/schema";

export default function Blog() {
  const { data: blogData, isLoading } = useQuery<{ blogPosts: BlogPost[] }>({
    queryKey: ["/api/blogs"],
  });

  const blogPosts = blogData?.blogPosts || [];

  if (isLoading) {
    return (
      <div className="pt-16 min-h-screen" data-testid="blog-page">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-muted-foreground">Loading blog posts...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen" data-testid="blog-page">
      {/* Hero Section */}
      <section className="py-20 bg-muted" data-testid="blog-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-6" data-testid="blog-title">
            <span className="font-script text-primary">Inspiring</span> Stories & Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8" data-testid="blog-subtitle">
            Read stories from our community, updates about our work, and insights on social impact. 
            Have a story to share? Submit your own blog post!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/blog/submit">
              <Button 
                size="lg" 
                className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:scale-105 transition-all duration-300"
                data-testid="submit-blog-cta"
              >
                <Edit3 className="mr-2 h-5 w-5" />
                ✍️ Share Your Story
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {blogPosts.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-6">📝</div>
              <h3 className="text-2xl font-bold text-foreground mb-4">No blog posts yet</h3>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Be the first to share your story! Submit a blog post and inspire others with your experiences.
              </p>
              <Link href="/blog/submit">
                <Button size="lg" data-testid="first-blog-submit">
                  <Edit3 className="mr-2 h-5 w-5" />
                  Write the First Post
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function BlogPostCard({ post }: { post: BlogPost }) {
  const formatDate = (date: Date | null) => {
    if (!date) return "";
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden" data-testid={`blog-card-${post.id}`}>
      {post.featuredImage && (
        <div className="aspect-video overflow-hidden">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            data-testid="blog-featured-image"
          />
        </div>
      )}
      <CardHeader className="pb-4">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="secondary" className="text-xs" data-testid="blog-category">
            {post.category || "General"}
          </Badge>
          {post.viewCount && post.viewCount > 0 && (
            <div className="flex items-center text-xs text-muted-foreground" data-testid="blog-view-count">
              <Eye className="h-3 w-3 mr-1" />
              {post.viewCount}
            </div>
          )}
        </div>
        <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors" data-testid="blog-title">
          {post.title}
        </CardTitle>
        {post.excerpt && (
          <CardDescription className="line-clamp-3" data-testid="blog-excerpt">
            {post.excerpt}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center" data-testid="blog-author">
            <User className="h-4 w-4 mr-1" />
            {post.authorName}
          </div>
          <div className="flex items-center" data-testid="blog-date">
            <Calendar className="h-4 w-4 mr-1" />
            {formatDate(post.createdAt)}
          </div>
        </div>
        
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4" data-testid="blog-tags">
            {post.tags.slice(0, 3).map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                #{tag}
              </Badge>
            ))}
          </div>
        )}
        
        <Link href={`/blog/${post.slug}`}>
          <Button 
            variant="outline" 
            className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
            data-testid="read-more-button"
          >
            Read More →
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}