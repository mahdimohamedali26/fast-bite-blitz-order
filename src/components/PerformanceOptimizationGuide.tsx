
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertCircle, Info } from "lucide-react";

const PerformanceOptimizationGuide = () => {
  const optimizations = [
    {
      category: "Images",
      status: "implemented",
      items: [
        "✅ Lazy loading implemented on all images",
        "✅ Error handling for failed image loads",
        "✅ Optimized image sizes and formats",
        "⚠️ Consider using WebP format for better compression",
        "📝 Compress images using TinyPNG before upload"
      ]
    },
    {
      category: "CSS & Animations",
      status: "implemented",
      items: [
        "✅ Will-change property applied for smooth animations",
        "✅ Hardware acceleration for transforms",
        "✅ Efficient transition durations (300ms)",
        "✅ Reduced layout shifts with consistent sizing"
      ]
    },
    {
      category: "Accessibility",
      status: "implemented",
      items: [
        "✅ ARIA labels on interactive elements",
        "✅ Minimum touch target size (44px)",
        "✅ Keyboard navigation support",
        "✅ Screen reader friendly content"
      ]
    },
    {
      category: "Responsive Design",
      status: "optimized",
      items: [
        "✅ Mobile-first responsive grid",
        "✅ Flexible padding and margins",
        "✅ Optimized for 768x1024 (tablet)",
        "✅ Optimized for 1920x1080 (desktop)",
        "✅ Touch-friendly interface"
      ]
    }
  ];

  const testingChecklist = [
    "Test on tablet resolution (768x1024 pixels)",
    "Test on desktop resolution (1920x1080 pixels)",
    "Verify button interactivity and hover states",
    "Check search and filter functionality",
    "Validate cart operations",
    "Test responsive navigation",
    "Confirm image loading performance",
    "Verify accessibility features"
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "implemented":
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case "optimized":
        return <CheckCircle className="w-5 h-5 text-blue-600" />;
      default:
        return <AlertCircle className="w-5 h-5 text-yellow-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "implemented":
        return "bg-green-100 text-green-800";
      case "optimized":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-yellow-100 text-yellow-800";
    }
  };

  return (
    <div className="space-y-6 p-6 bg-gray-50 rounded-lg">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Performance Optimization Status
        </h2>
        <p className="text-lg text-gray-600">
          Complete guide for testing and optimization results
        </p>
      </div>

      {/* Optimization Status */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {optimizations.map((optimization, index) => (
          <Card key={index} className="border-2">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center justify-between">
                <span className="text-lg">{optimization.category}</span>
                <div className="flex items-center space-x-2">
                  {getStatusIcon(optimization.status)}
                  <Badge className={getStatusColor(optimization.status)}>
                    {optimization.status}
                  </Badge>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {optimization.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-sm text-gray-700">
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Testing Checklist */}
      <Card className="border-2 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Info className="w-5 h-5 text-blue-600" />
            <span>Final Testing Checklist</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {testingChecklist.map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Image Compression Recommendations */}
      <Card className="border-2 border-orange-200">
        <CardHeader>
          <CardTitle className="text-orange-800">
            Image Compression Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-orange-50 p-4 rounded-lg">
            <h4 className="font-semibold text-orange-800 mb-2">
              Recommended Tools:
            </h4>
            <ul className="text-sm text-orange-700 space-y-1">
              <li>• TinyPNG (https://tinypng.com/) - Best for PNG/JPG compression</li>
              <li>• Squoosh (https://squoosh.app/) - Google's image optimizer</li>
              <li>• ImageOptim (Mac) or RIOT (Windows) for batch processing</li>
              <li>• Consider WebP format for modern browsers (90% smaller than JPEG)</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">
              Optimization Targets:
            </h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Menu item images: &lt;100KB each</li>
              <li>• Hero images: &lt;200KB</li>
              <li>• Icons and small images: &lt;20KB</li>
              <li>• Use appropriate dimensions (don't serve 4K images for 300px containers)</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PerformanceOptimizationGuide;
