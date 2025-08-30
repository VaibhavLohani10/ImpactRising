import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { ArrowLeft, Send, X, Plus } from "lucide-react";
import { Link } from "wouter";
import { insertBlogPostSchema, type InsertBlogPost } from "@shared/schema";

export default function BlogSubmit() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<InsertBlogPost>({
    resolver: zodResolver(insertBlogPostSchema),
    defaultValues: {
      title: "",
      content: "",
      excerpt: "",
      authorName: "",
      authorEmail: "",
      category: "general",
      featuredImage: "",
      tags: [],
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertBlogPost) => {
      const response = await fetch("/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to submit blog post");
      }
      
      return response.json();
    },
    onSuccess: (response) => {
      toast({
        title: "Blog post submitted!",
        description: "Your blog post has been submitted for review. We'll publish it after approval.",
        duration: 5000,
      });
      queryClient.invalidateQueries({ queryKey: ["/api/blogs"] });
      reset();
      setTags([]);
      setLocation("/blog");
    },
    onError: (error) => {
      toast({
        title: "Submission failed",
        description: "Please check your information and try again.",
        variant: "destructive",
      });
      console.error("Blog submission error:", error);
    },
  });

  const addTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim()) && tags.length < 5) {
      const newTags = [...tags, tagInput.trim()];
      setTags(newTags);
      setValue("tags", newTags);
      setTagInput("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    const newTags = tags.filter(tag => tag !== tagToRemove);
    setTags(newTags);
    setValue("tags", newTags);
  };

  const onSubmit = (data: InsertBlogPost) => {
    mutation.mutate({ ...data, tags });
  };

  const categories = [
    { value: "general", label: "General" },
    { value: "education", label: "Education" },
    { value: "empowerment", label: "Women Empowerment" },
    { value: "spirituality", label: "Spirituality" },
    { value: "environment", label: "Environment" },
    { value: "volunteer", label: "Volunteer Experience" },
    { value: "impact", label: "Impact Stories" },
    { value: "events", label: "Events & Updates" },
  ];

  return (
    <div className="pt-16 min-h-screen bg-muted/30" data-testid="blog-submit-page">
      {/* Header */}
      <section className="py-12 bg-background border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog">
            <Button variant="ghost" className="mb-6 -ml-4" data-testid="back-to-blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
          
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4" data-testid="submit-title">
              Share Your <span className="font-script text-primary">Story</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="submit-subtitle">
              Your experiences and insights can inspire others. Share your story about social impact, 
              volunteering, or community development.
            </p>
          </div>
        </div>
      </section>

      {/* Submission Form */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Submit Your Blog Post</CardTitle>
              <CardDescription>
                Fill out the form below to submit your blog post. Our team will review it before publishing.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Author Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="authorName">Your Name *</Label>
                    <Input
                      id="authorName"
                      placeholder="Enter your full name"
                      {...register("authorName")}
                      data-testid="input-author-name"
                    />
                    {errors.authorName && (
                      <p className="text-sm text-destructive" data-testid="error-author-name">
                        {errors.authorName.message}
                      </p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="authorEmail">Your Email *</Label>
                    <Input
                      id="authorEmail"
                      type="email"
                      placeholder="your.email@example.com"
                      {...register("authorEmail")}
                      data-testid="input-author-email"
                    />
                    {errors.authorEmail && (
                      <p className="text-sm text-destructive" data-testid="error-author-email">
                        {errors.authorEmail.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Blog Post Details */}
                <div className="space-y-2">
                  <Label htmlFor="title">Blog Post Title *</Label>
                  <Input
                    id="title"
                    placeholder="Enter an engaging title for your blog post"
                    {...register("title")}
                    data-testid="input-title"
                  />
                  {errors.title && (
                    <p className="text-sm text-destructive" data-testid="error-title">
                      {errors.title.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="excerpt">Short Description (Optional)</Label>
                  <Textarea
                    id="excerpt"
                    placeholder="A brief summary of your blog post (2-3 sentences)"
                    rows={3}
                    {...register("excerpt")}
                    data-testid="input-excerpt"
                  />
                  {errors.excerpt && (
                    <p className="text-sm text-destructive" data-testid="error-excerpt">
                      {errors.excerpt.message}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select 
                      onValueChange={(value) => setValue("category", value)}
                      defaultValue="general"
                    >
                      <SelectTrigger data-testid="select-category">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category.value} value={category.value}>
                            {category.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="featuredImage">Featured Image URL (Optional)</Label>
                    <Input
                      id="featuredImage"
                      type="url"
                      placeholder="https://example.com/image.jpg"
                      {...register("featuredImage")}
                      data-testid="input-featured-image"
                    />
                    {errors.featuredImage && (
                      <p className="text-sm text-destructive" data-testid="error-featured-image">
                        {errors.featuredImage.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Tags */}
                <div className="space-y-2">
                  <Label htmlFor="tags">Tags (Optional)</Label>
                  <div className="flex gap-2 mb-2">
                    <Input
                      value={tagInput}
                      onChange={(e) => setTagInput(e.target.value)}
                      placeholder="Add a tag and press Enter"
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          addTag();
                        }
                      }}
                      data-testid="input-tag"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={addTag}
                      disabled={!tagInput.trim() || tags.length >= 5}
                      data-testid="add-tag-button"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  {tags.length > 0 && (
                    <div className="flex flex-wrap gap-2" data-testid="tags-display">
                      {tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="flex items-center gap-1">
                          #{tag}
                          <button
                            type="button"
                            onClick={() => removeTag(tag)}
                            className="hover:text-destructive"
                            data-testid={`remove-tag-${index}`}
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                  )}
                  <p className="text-xs text-muted-foreground">
                    Add up to 5 tags to help categorize your blog post
                  </p>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <Label htmlFor="content">Blog Post Content *</Label>
                  <Textarea
                    id="content"
                    placeholder="Write your blog post here... 

You can use simple formatting:
# Large Heading
## Medium Heading  
**Bold Text**

Share your story, experiences, and insights!"
                    rows={15}
                    {...register("content")}
                    data-testid="input-content"
                  />
                  {errors.content && (
                    <p className="text-sm text-destructive" data-testid="error-content">
                      {errors.content.message}
                    </p>
                  )}
                  <p className="text-sm text-muted-foreground">
                    Minimum 100 characters. Use # for headings and ** for bold text.
                  </p>
                </div>

                {/* Submission Guidelines */}
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">📝 Submission Guidelines</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Write original content that's relevant to social impact and community development</li>
                    <li>• Share personal experiences, insights, or stories that can inspire others</li>
                    <li>• Keep your content respectful and appropriate for all audiences</li>
                    <li>• Your post will be reviewed before publication (usually within 2-3 business days)</li>
                    <li>• We reserve the right to edit for clarity and length</li>
                  </ul>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end pt-4">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={mutation.isPending}
                    className="px-8"
                    data-testid="submit-blog-button"
                  >
                    {mutation.isPending ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Submit Blog Post
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}