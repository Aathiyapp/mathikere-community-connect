
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
  const [activeForm, setActiveForm] = useState<'vendor' | 'consumer' | null>(null);

  const handleFormSubmit = (type: 'vendor' | 'consumer') => {
    toast({
      title: "Registration Submitted!",
      description: `Thank you for joining Mathikere Local Connect as a ${type}. We'll be in touch soon!`,
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
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <Card className="bg-white/10 backdrop-blur border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-white">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90">
                  To bridge the gap between Mathikere residents and local vendors by providing a seamless platform that fosters community growth, supports small businesses, and promotes sustainable local commerce.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-white">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90">
                  To become the go-to platform for Mathikere's residents and vendors, enhancing local trade and building a self-sustaining community ecosystem.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Why Choose Us Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            💡 Why Choose Mathikere Local Connect?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-green-600">For Consumers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Badge variant="secondary" className="mt-1">💰</Badge>
                  <div>
                    <h4 className="font-semibold">Cost Savings</h4>
                    <p className="text-gray-600">Avoid high delivery charges and surcharges imposed by larger platforms.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge variant="secondary" className="mt-1">🔍</Badge>
                  <div>
                    <h4 className="font-semibold">Transparency</h4>
                    <p className="text-gray-600">Know exactly where your money goes, supporting local businesses directly.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge variant="secondary" className="mt-1">🌱</Badge>
                  <div>
                    <h4 className="font-semibold">Environmental Impact</h4>
                    <p className="text-gray-600">Reduce carbon footprint by minimizing long-distance deliveries.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge variant="secondary" className="mt-1">🛍️</Badge>
                  <div>
                    <h4 className="font-semibold">Convenience</h4>
                    <p className="text-gray-600">Access a variety of local vendors in one place.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600">For Vendors</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Badge variant="secondary" className="mt-1">👁️</Badge>
                  <div>
                    <h4 className="font-semibold">Increased Visibility</h4>
                    <p className="text-gray-600">Reach more local customers without hefty commission fees.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge variant="secondary" className="mt-1">💪</Badge>
                  <div>
                    <h4 className="font-semibold">Empowerment</h4>
                    <p className="text-gray-600">Maintain control over pricing and offerings.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge variant="secondary" className="mt-1">🤝</Badge>
                  <div>
                    <h4 className="font-semibold">Community Support</h4>
                    <p className="text-gray-600">Be part of a movement that values and uplifts local businesses.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            📊 How It Works
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Vendor Registration", desc: "Local businesses sign up, providing details about their offerings." },
              { step: "2", title: "Consumer Browsing", desc: "Residents explore a curated list of local vendors." },
              { step: "3", title: "Order Placement", desc: "Consumers place orders directly through the platform." },
              { step: "4", title: "Delivery/Pickup", desc: "Options for home delivery or convenient local pickup." }
            ].map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold mb-4">
                    {item.step}
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
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
                  <Badge className="bg-orange-100 text-orange-700 mb-2">Special Discounts</Badge>
                  <p className="text-gray-600">Early access to promotional offers</p>
                </div>
                <div className="text-center">
                  <Badge className="bg-orange-100 text-orange-700 mb-2">Priority Support</Badge>
                  <p className="text-gray-600">Dedicated assistance for early adopters</p>
                </div>
                <div className="text-center">
                  <Badge className="bg-orange-100 text-orange-700 mb-2">Community Recognition</Badge>
                  <p className="text-gray-600">Featured spotlights for early vendor partners</p>
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
          
          <div className="flex justify-center space-x-4 mb-8">
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
          </div>

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
                  <p className="text-blue-600">connect@mathikerelocal.com</p>
                </div>
                <div>
                  <Label>Phone</Label>
                  <p className="text-blue-600">+91 98765 43210</p>
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

        {/* Social Media Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            🔗 Stay Connected
          </h2>
          
          <Card className="text-center">
            <CardHeader>
              <CardTitle>Follow us on social media to stay updated</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center space-x-6">
                <Badge variant="outline" className="px-4 py-2">Facebook: Mathikere Local Connect</Badge>
                <Badge variant="outline" className="px-4 py-2">Twitter: @MathikereConnect</Badge>
                <Badge variant="outline" className="px-4 py-2">Instagram: @MathikereLocalConnect</Badge>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-green-600 to-blue-600 text-white py-16 px-8 rounded-2xl">
          <h2 className="text-3xl font-bold mb-4">📣 Spread the Word</h2>
          <p className="text-xl mb-8 opacity-90">
            Help us grow by sharing this initiative with friends, family, and fellow residents.
          </p>
          <p className="text-lg">
            Together, we can build a stronger, more connected Mathikere.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Index;
