
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [activeForm, setActiveForm] = useState<'vendor' | 'consumer' | 'investor' | null>(null);

  const handleFormSubmit = (type: 'vendor' | 'consumer' | 'investor') => {
    const messages = {
      vendor: "Thank you for joining Mathikere Local Connect as a vendor. We'll be in touch soon!",
      consumer: "Thank you for joining Mathikere Local Connect as a consumer. We'll be in touch soon!",
      investor: "Thank you for your interest in partnering with Mathikere Local Connect. We'll review your information and get back to you soon!"
    };
    
    toast({
      title: "Registration Submitted!",
      description: messages[type],
    });
    setActiveForm(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Mathikere Local Connect
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Empowering Our Community Through Local Commerce
          </p>
          <p className="text-lg mb-8 opacity-80 max-w-3xl mx-auto">
            A community-driven platform that bridges the gap between Mathikere residents and local vendors, 
            promoting sustainable local commerce while saving costs and supporting small businesses.
          </p>
          <div className="flex justify-center space-x-4 flex-wrap gap-2">
            <Button 
              onClick={() => setActiveForm('vendor')}
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 text-lg"
              size="lg"
            >
              Join as Vendor
            </Button>
            <Button 
              onClick={() => setActiveForm('consumer')}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 text-lg"
              size="lg"
            >
              Join as Consumer
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Problem Statement Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            🚨 The Challenge We Face
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-red-50 border-red-200 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-red-600 flex items-center">
                  💸 High Delivery Charges
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Popular delivery platforms charge ₹30-60 per order in delivery fees, plus surge pricing during peak hours.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Platform fees: ₹5-15 per order</li>
                  <li>• Delivery charges: ₹30-60</li>
                  <li>• Surge pricing: Up to 2x during peak times</li>
                  <li>• GST on all fees: Additional 18%</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-orange-50 border-orange-200 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-orange-600 flex items-center">
                  📈 Price Inflation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Items are often marked up 15-30% higher than local market prices to cover commission fees.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Restaurant commission: 20-30%</li>
                  <li>• Grocery markup: 15-25%</li>
                  <li>• Hidden service charges</li>
                  <li>• No price transparency</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-green-50 border-green-200 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-green-600 flex items-center">
                  🌍 Environmental Impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Multiple long-distance deliveries increase carbon footprint and traffic congestion.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Increased vehicle emissions</li>
                  <li>• Packaging waste</li>
                  <li>• Traffic congestion</li>
                  <li>• Resource inefficiency</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-purple-50 border-purple-200 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-purple-600 flex items-center">
                  🚫 Limited Access
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  High costs make these services unaffordable for many residents, creating inequality.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Budget constraints for families</li>
                  <li>• Limited vendor options</li>
                  <li>• No direct vendor communication</li>
                  <li>• Dependency on external platforms</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Solution Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            💡 Our Solution: Mathikere Local Connect
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-gradient-to-br from-green-100 to-green-50 border-green-200 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto text-2xl mb-4">
                  🏪
                </div>
                <CardTitle className="text-xl text-green-700">Empower Local Vendors</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Provide local businesses with a digital presence without hefty commission fees, helping them reach more customers directly.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-100 to-blue-50 border-blue-200 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto text-2xl mb-4">
                  💰
                </div>
                <CardTitle className="text-xl text-blue-700">Affordable Options</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Eliminate excessive delivery charges and platform fees, ensuring residents access reasonably priced goods from their neighborhood.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-emerald-100 to-emerald-50 border-emerald-200 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto text-2xl mb-4">
                  🌱
                </div>
                <CardTitle className="text-xl text-emerald-700">Promote Sustainability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Encourage eco-friendly practices through local sourcing, reduced transportation, and community-based commerce.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center bg-gradient-to-r from-green-600 to-blue-600 text-white py-12 px-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">🎯 Our Mission & Vision</h3>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div>
                <h4 className="text-xl font-semibold mb-3">Our Mission</h4>
                <p className="text-white/90">
                  To bridge the gap between Mathikere residents and local vendors by providing a seamless platform that fosters community growth, supports small businesses, and promotes sustainable local commerce.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3">Our Vision</h4>
                <p className="text-white/90">
                  To become the go-to platform for Mathikere's residents and vendors, enhancing local trade and building a self-sustaining community ecosystem.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            📊 How It Works
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Vendor Registration", desc: "Local businesses sign up, providing details about their offerings.", icon: "📝" },
              { step: "2", title: "Consumer Browsing", desc: "Residents explore a curated list of local vendors.", icon: "🔍" },
              { step: "3", title: "Direct Orders", desc: "Consumers place orders directly with vendors at fair prices.", icon: "🛒" },
              { step: "4", title: "Local Delivery", desc: "Quick pickup or local delivery without excessive fees.", icon: "🚲" }
            ].map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold mb-4">
                    {item.step}
                  </div>
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Benefits Comparison Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            📈 Why Choose Mathikere Local Connect?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-green-600">For Consumers</CardTitle>
                <CardDescription>Save money and support your local community</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Badge variant="secondary" className="mt-1">💰</Badge>
                  <div>
                    <h4 className="font-semibold">Save ₹50-100 per order</h4>
                    <p className="text-gray-600">Avoid high delivery charges and platform fees imposed by larger platforms.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge variant="secondary" className="mt-1">🔍</Badge>
                  <div>
                    <h4 className="font-semibold">Price Transparency</h4>
                    <p className="text-gray-600">Know exactly where your money goes, supporting local businesses directly.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge variant="secondary" className="mt-1">🌱</Badge>
                  <div>
                    <h4 className="font-semibold">Reduce Carbon Footprint</h4>
                    <p className="text-gray-600">Minimize environmental impact by supporting local commerce.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge variant="secondary" className="mt-1">🤝</Badge>
                  <div>
                    <h4 className="font-semibold">Community Connection</h4>
                    <p className="text-gray-600">Build relationships with local vendors and strengthen community bonds.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600">For Vendors</CardTitle>
                <CardDescription>Grow your business without hefty commissions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Badge variant="secondary" className="mt-1">📈</Badge>
                  <div>
                    <h4 className="font-semibold">Increase Revenue by 20-30%</h4>
                    <p className="text-gray-600">Keep more profits without paying high commission fees.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge variant="secondary" className="mt-1">🎯</Badge>
                  <div>
                    <h4 className="font-semibold">Direct Customer Connection</h4>
                    <p className="text-gray-600">Build lasting relationships with your local customer base.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge variant="secondary" className="mt-1">⚡</Badge>
                  <div>
                    <h4 className="font-semibold">Control Your Business</h4>
                    <p className="text-gray-600">Set your own prices and terms without platform restrictions.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge variant="secondary" className="mt-1">🏆</Badge>
                  <div>
                    <h4 className="font-semibold">Community Recognition</h4>
                    <p className="text-gray-600">Be part of a movement that values local businesses.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            💬 What Our Community Says
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mr-4">
                    R
                  </div>
                  <div>
                    <h4 className="font-semibold">Rajesh Kumar</h4>
                    <p className="text-sm text-gray-600">Local Resident</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "This initiative will save us so much money on delivery charges. Supporting local vendors while saving costs - it's a win-win!"
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mr-4">
                    P
                  </div>
                  <div>
                    <h4 className="font-semibold">Priya Sharma</h4>
                    <p className="text-sm text-gray-600">Kirana Store Owner</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "Finally, a platform that doesn't take 25% commission! I can offer better prices to my customers and still make a decent profit."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center mr-4">
                    A
                  </div>
                  <div>
                    <h4 className="font-semibold">Arun Nair</h4>
                    <p className="text-sm text-gray-600">IT Professional</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "Great concept! Mathikere needs this kind of community-driven platform. Looking forward to supporting local businesses."
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Early Registration Benefits */}
        <section className="mb-20">
          <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-orange-600">🎁 Early Registration Benefits</CardTitle>
              <CardDescription className="text-lg">
                Be among the first to join and enjoy exclusive perks upon our official launch!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Badge className="bg-orange-100 text-orange-700 mb-2">🎯 Exclusive Discounts</Badge>
                  <p className="text-gray-600">Early access to promotional offers and special pricing</p>
                </div>
                <div className="text-center">
                  <Badge className="bg-orange-100 text-orange-700 mb-2">⚡ Priority Support</Badge>
                  <p className="text-gray-600">Dedicated assistance and faster response times</p>
                </div>
                <div className="text-center">
                  <Badge className="bg-orange-100 text-orange-700 mb-2">🌟 Featured Recognition</Badge>
                  <p className="text-gray-600">Spotlight features for early vendor partners</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Registration Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            📝 Get Involved
          </h2>
          
          <div className="flex justify-center space-x-4 mb-8 flex-wrap gap-2">
            <Button 
              onClick={() => setActiveForm('vendor')}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg"
              size="lg"
            >
              Register as Vendor
            </Button>
            <Button 
              onClick={() => setActiveForm('consumer')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
              size="lg"
            >
              Register as Consumer
            </Button>
            <Button 
              onClick={() => setActiveForm('investor')}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg"
              size="lg"
            >
              Partner with Us
            </Button>
          </div>

          {/* Registration Forms */}
          {activeForm === 'vendor' && (
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl text-green-600">Vendor Registration</CardTitle>
                <CardDescription>Join our network of local businesses</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={(e) => { e.preventDefault(); handleFormSubmit('vendor'); }} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="businessName">Business Name *</Label>
                      <Input id="businessName" required />
                    </div>
                    <div>
                      <Label htmlFor="ownerName">Owner's Name *</Label>
                      <Input id="ownerName" required />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="vendorPhone">Contact Number</Label>
                      <Input id="vendorPhone" type="tel" />
                    </div>
                    <div>
                      <Label htmlFor="vendorEmail">Email Address</Label>
                      <Input id="vendorEmail" type="email" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="businessType">Type of Business *</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select business type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="food-stall">Food Stall</SelectItem>
                        <SelectItem value="kirana-store">Kirana Store</SelectItem>
                        <SelectItem value="fruit-seller">Fruit Seller</SelectItem>
                        <SelectItem value="pharmacy">Pharmacy</SelectItem>
                        <SelectItem value="bakery">Bakery</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="businessDesc">Brief Description *</Label>
                    <Textarea id="businessDesc" required placeholder="Describe your business and offerings" />
                  </div>
                  <div>
                    <Label htmlFor="vendorContact">Preferred Contact Method *</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select contact method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="phone">Phone</SelectItem>
                        <SelectItem value="email">Email</SelectItem>
                        <SelectItem value="both">Both</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex justify-end space-x-3">
                    <Button type="button" variant="outline" onClick={() => setActiveForm(null)}>
                      Cancel
                    </Button>
                    <Button type="submit" className="bg-green-600 hover:bg-green-700">
                      Submit Registration
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          {activeForm === 'consumer' && (
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600">Consumer Registration</CardTitle>
                <CardDescription>Join our community of local shoppers</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={(e) => { e.preventDefault(); handleFormSubmit('consumer'); }} className="space-y-4">
                  <div>
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input id="fullName" required />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="consumerPhone">Contact Number</Label>
                      <Input id="consumerPhone" type="tel" />
                    </div>
                    <div>
                      <Label htmlFor="consumerEmail">Email Address</Label>
                      <Input id="consumerEmail" type="email" />
                    </div>
                  </div>
                  <div>
                    <Label>Areas of Interest</Label>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      {['Food', 'Groceries', 'Fruits', 'Pharmacy', 'Bakery', 'Other'].map((interest) => (
                        <div key={interest} className="flex items-center space-x-2">
                          <Checkbox id={interest} />
                          <Label htmlFor={interest}>{interest}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="consumerContact">Preferred Contact Method *</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select contact method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="phone">Phone</SelectItem>
                        <SelectItem value="email">Email</SelectItem>
                        <SelectItem value="both">Both</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex justify-end space-x-3">
                    <Button type="button" variant="outline" onClick={() => setActiveForm(null)}>
                      Cancel
                    </Button>
                    <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                      Submit Registration
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          {activeForm === 'investor' && (
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl text-purple-600">Investment & Partnership Registration</CardTitle>
                <CardDescription>Join us as an investor or business co-founder and help build Mathikere's future</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={(e) => { e.preventDefault(); handleFormSubmit('investor'); }} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="investorName">Full Name *</Label>
                      <Input id="investorName" required />
                    </div>
                    <div>
                      <Label htmlFor="investorCompany">Company/Organization</Label>
                      <Input id="investorCompany" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="investorPhone">Contact Number *</Label>
                      <Input id="investorPhone" type="tel" required />
                    </div>
                    <div>
                      <Label htmlFor="investorEmail">Email Address *</Label>
                      <Input id="investorEmail" type="email" required />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="partnershipType">Type of Interest *</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your interest" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="investor">Financial Investment</SelectItem>
                        <SelectItem value="co-founder">Business Co-founder</SelectItem>
                        <SelectItem value="advisor">Strategic Advisor</SelectItem>
                        <SelectItem value="technology">Technology Partner</SelectItem>
                        <SelectItem value="marketing">Marketing Partner</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="experience">Relevant Experience</Label>
                    <Textarea id="experience" placeholder="Tell us about your background and relevant experience" />
                  </div>
                  <div>
                    <Label htmlFor="contribution">How You Can Contribute *</Label>
                    <Textarea id="contribution" required placeholder="Describe how you can contribute to Mathikere Local Connect's growth and success" />
                  </div>
                  <div>
                    <Label htmlFor="investmentRange">Investment Range (if applicable)</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select investment range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-1l">Under ₹1 Lakh</SelectItem>
                        <SelectItem value="1l-5l">₹1-5 Lakhs</SelectItem>
                        <SelectItem value="5l-10l">₹5-10 Lakhs</SelectItem>
                        <SelectItem value="10l-25l">₹10-25 Lakhs</SelectItem>
                        <SelectItem value="25l-50l">₹25-50 Lakhs</SelectItem>
                        <SelectItem value="above-50l">Above ₹50 Lakhs</SelectItem>
                        <SelectItem value="not-applicable">Not Applicable</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="timeline">Preferred Timeline</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="When would you like to get involved?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediate">Immediately</SelectItem>
                        <SelectItem value="1-3months">1-3 Months</SelectItem>
                        <SelectItem value="3-6months">3-6 Months</SelectItem>
                        <SelectItem value="6-12months">6-12 Months</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex justify-end space-x-3">
                    <Button type="button" variant="outline" onClick={() => setActiveForm(null)}>
                      Cancel
                    </Button>
                    <Button type="submit" className="bg-purple-600 hover:bg-purple-700">
                      Submit Registration
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}
        </section>

        {/* Investor Call to Action */}
        <section className="mb-20">
          <Card className="bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-200">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-purple-600">🤝 Looking for Partners & Investors</CardTitle>
              <CardDescription className="text-lg">
                Are you an investor or business professional who believes in community-driven commerce?
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-purple-700">We're seeking:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center space-x-2">
                      <Badge variant="secondary" className="text-xs">💰</Badge>
                      <span>Financial investors who share our vision</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Badge variant="secondary" className="text-xs">🧠</Badge>
                      <span>Business co-founders with relevant expertise</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Badge variant="secondary" className="text-xs">🎯</Badge>
                      <span>Strategic advisors in technology and marketing</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Badge variant="secondary" className="text-xs">🌟</Badge>
                      <span>Industry experts in local commerce and community building</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-purple-700">What we offer:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center space-x-2">
                      <Badge variant="secondary" className="text-xs">🚀</Badge>
                      <span>Ground-floor opportunity in growing market</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Badge variant="secondary" className="text-xs">💡</Badge>
                      <span>Proven concept with strong community support</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Badge variant="secondary" className="text-xs">🏆</Badge>
                      <span>Opportunity to make meaningful social impact</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Badge variant="secondary" className="text-xs">🤝</Badge>
                      <span>Collaborative partnership approach</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            📞 Contact Us
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
                <CardDescription>
                  Have questions or suggestions? We'd love to hear from you.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Email</Label>
                  <p className="text-blue-600">aathiyappa008@gmail.com</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Form</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="contactName">Name</Label>
                    <Input id="contactName" />
                  </div>
                  <div>
                    <Label htmlFor="contactEmail">Email</Label>
                    <Input id="contactEmail" type="email" />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Your message here..." />
                  </div>
                  <Button className="w-full">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-green-600 to-blue-600 text-white py-16 px-8 rounded-2xl">
          <h2 className="text-3xl font-bold mb-4">📣 Join the Movement</h2>
          <p className="text-xl mb-8 opacity-90">
            Help us build a stronger, more connected Mathikere community.
          </p>
          <p className="text-lg mb-6">
            Together, we can create a sustainable local economy that benefits everyone.
          </p>
          <Button 
            onClick={() => setActiveForm('consumer')}
            className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 text-lg"
            size="lg"
          >
            Get Started Today
          </Button>
        </section>
      </div>
    </div>
  );
};

export default Index;
