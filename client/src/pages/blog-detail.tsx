import { useQuery } from "@tanstack/react-query";
import { useRoute, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Calendar, User, Eye, Share2, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import type { BlogPost } from "@shared/schema";

export default function BlogDetail() {
  const [match, params] = useRoute("/blog/:slug");
  const { toast } = useToast();
  
  const { data: blogData, isLoading, error } = useQuery<{ blogPost: BlogPost }>({
    queryKey: [`/api/blogs/slug/${params?.slug}`],
    enabled: !!params?.slug,
  });

  const blogPost = blogData?.blogPost;

  const handleShare = async () => {
    if (navigator.share && blogPost) {
      try {
        await navigator.share({
          title: blogPost.title,
          text: blogPost.excerpt || "",
          url: window.location.href,
        });
      } catch (error) {
        // Fallback to clipboard
        copyToClipboard();
      }
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied!",
      description: "Blog post link copied to clipboard",
    });
  };

  const formatDate = (date: Date | null) => {
    if (!date) return "";
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (isLoading) {
    return (
      <div className="pt-16 min-h-screen" data-testid="blog-detail-loading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="animate-pulse">
            <div className="h-8 bg-muted rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-muted rounded w-1/2 mb-8"></div>
            <div className="h-64 bg-muted rounded mb-8"></div>
            <div className="space-y-4">
              <div className="h-4 bg-muted rounded"></div>
              <div className="h-4 bg-muted rounded w-5/6"></div>
              <div className="h-4 bg-muted rounded w-4/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !blogPost) {
    return (
      <div className="pt-16 min-h-screen" data-testid="blog-detail-error">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="text-6xl mb-6">📄</div>
          <h1 className="text-3xl font-bold text-foreground mb-4">Blog post not found</h1>
          <p className="text-muted-foreground mb-8">
            The blog post you're looking for doesn't exist or has been removed.
          </p>
          <Link href="/blog">
            <Button data-testid="back-to-blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen" data-testid="blog-detail-page">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link href="/blog">
          <Button variant="ghost" className="mb-8 -ml-4" data-testid="back-to-blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </Link>

        {/* Article Header */}
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="secondary" data-testid="article-category">
              {blogPost.category || "General"}
            </Badge>
            {blogPost.viewCount && blogPost.viewCount > 0 && (
              <div className="flex items-center text-sm text-muted-foreground" data-testid="article-view-count">
                <Eye className="h-4 w-4 mr-1" />
                {blogPost.viewCount} views
              </div>
            )}
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6 leading-tight" data-testid="article-title">
            {blogPost.title}
          </h1>
          
          {blogPost.excerpt && (
            <p className="text-xl text-muted-foreground leading-relaxed mb-6" data-testid="article-excerpt">
              {blogPost.excerpt}
            </p>
          )}

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center" data-testid="article-author">
                <User className="h-4 w-4 mr-2" />
                <span className="font-medium">{blogPost.authorName}</span>
              </div>
              <div className="flex items-center" data-testid="article-date">
                <Calendar className="h-4 w-4 mr-2" />
                {formatDate(blogPost.createdAt)}
              </div>
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={handleShare}
              className="self-start sm:self-center"
              data-testid="share-article"
            >
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>

          {blogPost.tags && blogPost.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8" data-testid="article-tags">
              {blogPost.tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="text-sm">
                  #{tag}
                </Badge>
              ))}
            </div>
          )}

          <Separator />
        </header>

        {/* Featured Image */}
        {blogPost.featuredImage && (
          <div className="mb-8">
            <img
              src={blogPost.featuredImage}
              alt={blogPost.title}
              className="w-full h-64 sm:h-96 object-cover rounded-lg shadow-lg"
              data-testid="article-featured-image"
            />
          </div>
        )}

        {/* Article Content */}
        <div 
          className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-foreground prose-p:text-foreground prose-p:leading-relaxed prose-a:text-primary prose-strong:text-foreground prose-blockquote:border-primary prose-blockquote:text-muted-foreground"
          data-testid="article-content"
        >
          {blogPost.content.split('\n').map((paragraph, index) => {
            if (paragraph.trim() === '') return <br key={index} />;
            
            // Simple markdown-style formatting
            if (paragraph.startsWith('# ')) {
              return <h2 key={index} className="text-2xl font-bold mt-8 mb-4">{paragraph.slice(2)}</h2>;
            }
            if (paragraph.startsWith('## ')) {
              return <h3 key={index} className="text-xl font-semibold mt-6 mb-3">{paragraph.slice(3)}</h3>;
            }
            if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
              return <p key={index} className="font-semibold mb-4">{paragraph.slice(2, -2)}</p>;
            }
            
            return <p key={index} className="mb-4 leading-relaxed">{paragraph}</p>;
          })}
        </div>

        {/* Article Footer */}
        <footer className="mt-12 pt-8 border-t">
          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              Enjoyed reading this story? Share it with others!
            </p>
            <div className="flex justify-center gap-4">
              <Button onClick={handleShare} variant="outline" data-testid="footer-share">
                <Share2 className="h-4 w-4 mr-2" />
                Share Article
              </Button>
              <Link href="/blog/submit">
                <Button data-testid="footer-write">
                  <Heart className="h-4 w-4 mr-2" />
                  Share Your Story
                </Button>
              </Link>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
}