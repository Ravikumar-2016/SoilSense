import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Leaf, Beaker, TrendingUp, CheckCircle, ArrowRight, Thermometer } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-24 lg:py-32 bg-gradient-to-br from-green-50 to-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-green-100 text-green-800 px-3 py-1">
                  AI-Powered Agriculture
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Welcome to <span className="text-green-600">SoilSense</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Your Smart Agriculture Assistant - Get AI-powered crop and fertilizer recommendations tailored to your
                  soil and climate conditions for optimal farming results.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                  <Link href="/crop-recommendation">
                    <Leaf className="mr-2 h-4 w-4" />
                    Try Crop Recommendation
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/fertilizer-recommendation">
                    <Beaker className="mr-2 h-4 w-4" />
                    Try Fertilizer Recommendation
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What SoilSense Offers</h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl">
                Advanced agricultural intelligence at your fingertips
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
                  <CardTitle className="flex items-center gap-2">
                    <Leaf className="h-5 w-5" />
                    Crop Recommendation
                  </CardTitle>
                  <CardDescription className="text-blue-100">
                    Find the most suitable crops for your field conditions
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Environmental parameter analysis</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Soil condition assessment</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Nutrient level optimization</span>
                    </li>
                  </ul>
                  <Button asChild className="w-full mt-4 bg-transparent" variant="outline">
                    <Link href="/crop-recommendation">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-t-lg">
                  <CardTitle className="flex items-center gap-2">
                    <Beaker className="h-5 w-5" />
                    Fertilizer Recommendation
                  </CardTitle>
                  <CardDescription className="text-emerald-100">
                    Get personalized fertilizer suggestions for your crops
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Crop-specific recommendations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Soil type consideration</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Nutrient balance optimization</span>
                    </li>
                  </ul>
                  <Button asChild className="w-full mt-4 bg-transparent" variant="outline">
                    <Link href="/fertilizer-recommendation">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">How It Works</h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl">
                Simple steps to get intelligent agricultural recommendations
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <Thermometer className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold">1. Input Data</h3>
                <p className="text-gray-600">
                  Enter your soil conditions, environmental parameters, and nutrient levels
                </p>
              </div>

              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">2. AI Analysis</h3>
                <p className="text-gray-600">
                  Our AI models analyze your data using advanced machine learning algorithms
                </p>
              </div>

              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                  <CheckCircle className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold">3. Get Recommendations</h3>
                <p className="text-gray-600">
                  Receive personalized crop or fertilizer recommendations for optimal results
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Optimize Your Farming?</h2>
              <p className="max-w-[600px] text-gray-600 md:text-xl">
                Start making data-driven decisions for your agricultural success
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                  <Link href="/crop-recommendation">
                    <Leaf className="mr-2 h-4 w-4" />
                    Crop Recommendations
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/fertilizer-recommendation">
                    <Beaker className="mr-2 h-4 w-4" />
                    Fertilizer Recommendations
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
