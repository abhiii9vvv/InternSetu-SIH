import { GovernmentHeader } from "@/components/government-header"
import { GovernmentFooter } from "@/components/government-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, Instagram, Youtube, Linkedin, Twitter, Star, Quote, MapPin } from "lucide-react"
import Image from "next/image"

export default function GalleryPage() {
  const photos = [
    {
      id: 1,
      title: "Rishab Sharma at learning and upskilling...",
      description: "Intern at TCS working on innovative projects",
      image: "/young-professional-working-on-laptop.jpg",
      category: "workplace",
    },
    {
      id: 2,
      title: "Team collaboration session",
      description: "Interns collaborating on real-world projects",
      image: "/diverse-team-of-young-professionals-in-meeting.jpg",
      category: "teamwork",
    },
    {
      id: 3,
      title: "Skill development workshop",
      description: "Professional development training session",
      image: "/training-workshop-with-young-professionals.jpg",
      category: "training",
    },
    {
      id: 4,
      title: "Industry visit and learning",
      description: "Interns visiting manufacturing facility",
      image: "/industrial-facility-visit-with-safety-helmets.jpg",
      category: "industry",
    },
    {
      id: 5,
      title: "Achievement ceremony",
      description: "Celebrating successful completion",
      image: "/award-ceremony-with-certificates.jpg",
      category: "achievement",
    },
    {
      id: 6,
      title: "Mentorship session",
      description: "One-on-one guidance from industry experts",
      image: "/mentor-and-mentee-discussion.jpg",
      category: "mentorship",
    },
  ]

  const videos = [
    {
      id: 1,
      title: "PM Internship Scheme Overview",
      description: "Complete guide to the internship program",
      thumbnail: "/government-presentation-video-thumbnail.jpg",
      duration: "5:30",
    },
    {
      id: 2,
      title: "Success Stories Compilation",
      description: "Hear from successful interns across India",
      thumbnail: "/success-stories-video-compilation.jpg",
      duration: "8:45",
    },
    {
      id: 3,
      title: "Application Process Guide",
      description: "Step-by-step application walkthrough",
      thumbnail: "/application-guide-tutorial-video.jpg",
      duration: "6:20",
    },
  ]

  const testimonials = [
    {
      id: 1,
      name: "Khushi",
      role: "Food and Beverage Steward",
      company: "LEMON TREE HOTELS LIMITED",
      location: "India",
      image: "/young-professional-woman-smiling.png",
      testimonial:
        "I have learnt how to interact with people, how to handle situations, how to handle calls, and how grooming changes your personality.",
      rating: 5,
    },
    {
      id: 2,
      name: "Puwatitara Bora",
      role: "Intern Sampling",
      company: "OIL AND NATURAL GAS CORPORATION LIMITED",
      location: "India",
      image: "/young-professional-woman.png",
      testimonial:
        "The PM Internship Scheme has been a life-changing experience. Working with ONGC has given me invaluable industry exposure and practical skills.",
      rating: 5,
    },
    {
      id: 3,
      name: "Suraj Gupta",
      role: "Intern Mechanical",
      company: "OIL AND NATURAL GAS CORPORATION LIMITED",
      location: "India",
      image: "/young-professional-man-in-industrial-setting.jpg",
      testimonial:
        "I have learned many technical skills including drilling and cementing, as well as its application and relevance.",
      rating: 5,
    },
    {
      id: 4,
      name: "Pralay",
      role: "Banking Intern",
      company: "HDFC Bank",
      location: "India",
      image: "/young-professional-man-glasses.png",
      testimonial:
        "I have been an intern for the past 2 months, and I have learned a lot here. The staff and branch manager are very supportive. I have gained knowledge about various banking products.",
      rating: 5,
    },
    {
      id: 5,
      name: "Shreyasree Saha",
      role: "Intern",
      company: "ITC",
      location: "Kolkata",
      image: "/young-professional-woman.png",
      testimonial:
        "I got to know about the PM Internship Scheme through social media. I applied and got a chance in ITC head office Kolkata. So, it's a great opportunity for me.",
      rating: 5,
    },
    {
      id: 6,
      name: "Bidisha Shrestha",
      role: "Finance Intern",
      company: "REC Limited",
      location: "India",
      image: "/young-professional-woman-smiling.png",
      testimonial:
        "My experience in the internship has been great so far and as a finance intern I have learned how to implement the fundamental financial benefits in our day to day activities.",
      rating: 5,
    },
  ]

  const events = [
    {
      id: 1,
      title: "PMIS Intern-Industry Interaction",
      description:
        "Real voices, real impact — PMIS interns in Mumbai narrate their journeys and successes under the scheme.",
      date: "16th May, 2025",
      location: "Mumbai, Maharashtra",
      image: "/business-meeting-event.jpg",
    },
    {
      id: 2,
      title: "Eve of Independence Day",
      description: "Inspiring conversations with PMIS interns on the eve of Independence Day celebrations.",
      date: "14th May, 2025",
      location: "Delhi",
      image: "/independence-day-celebration.png",
    },
    {
      id: 3,
      title: "PMIS North-East Round table",
      description:
        "Leaders, industry, and youth converge in Shillong to drive PM Internship Scheme's growth across the North-East.",
      date: "10th July, 2025",
      location: "Shillong, Meghalaya",
      image: "/roundtable-discussion.jpg",
    },
    {
      id: 4,
      title: "Intern Interaction Event",
      description: "Meaningful moments in Dehradun— PMIS interns engage in insightful conversations.",
      date: "17th June, 2025",
      location: "Dehradun",
      image: "/group-discussion.png",
    },
    {
      id: 5,
      title: "PMIS Intern Connect",
      description:
        "Celebrating the spirit of learning, innovation, and youth leadership with PMIS interns in Hyderabad.",
      date: "20th June, 2025",
      location: "Hyderabad",
      image: "/networking-event.png",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <GovernmentHeader />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Gallery</h1>
          <p className="text-lg text-gray-600">Explore the journey of PM Internship Scheme participants</p>
        </div>

        <Tabs defaultValue="photos" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="photos" className="flex items-center gap-2">
              <Instagram className="w-4 h-4" />
              Photos
            </TabsTrigger>
            <TabsTrigger value="videos" className="flex items-center gap-2">
              <Youtube className="w-4 h-4" />
              Videos
            </TabsTrigger>
            <TabsTrigger value="testimonials" className="flex items-center gap-2">
              <Quote className="w-4 h-4" />
              Testimonials
            </TabsTrigger>
            <TabsTrigger value="social" className="flex items-center gap-2">
              <Twitter className="w-4 h-4" />
              Social Media
            </TabsTrigger>
            <TabsTrigger value="events" className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Events
            </TabsTrigger>
          </TabsList>

          {/* Photos Tab */}
          <TabsContent value="photos">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {photos.map((photo) => (
                <Card key={photo.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <Image
                      src={photo.image || "/placeholder.svg"}
                      alt={photo.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                    <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
                      {photo.category}
                    </Badge>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">{photo.title}</h3>
                    <p className="text-sm text-gray-600">{photo.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Videos Tab */}
          <TabsContent value="videos">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video) => (
                <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <Image
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      width={350}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 p-4">
                        <Play className="w-6 h-6" />
                      </Button>
                    </div>
                    <Badge className="absolute bottom-2 right-2 bg-black/70 text-white">{video.duration}</Badge>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">{video.title}</h3>
                    <p className="text-sm text-gray-600">{video.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Testimonials Tab */}
          <TabsContent value="testimonials">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={60}
                        height={60}
                        className="rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                        <p className="text-sm text-primary font-medium">{testimonial.role}</p>
                        <p className="text-sm text-gray-600">{testimonial.company}</p>
                        <div className="flex items-center gap-1 mt-1">
                          <MapPin className="w-3 h-3 text-gray-400" />
                          <span className="text-xs text-gray-500">{testimonial.location}</span>
                        </div>
                      </div>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <blockquote className="text-gray-700 italic">"{testimonial.testimonial}"</blockquote>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button variant="outline" size="lg" className="px-8 bg-transparent">
                Load More Stories
              </Button>
            </div>
          </TabsContent>

          {/* Social Media Tab */}
          <TabsContent value="social">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Social Media Gallery</h2>
              <p className="text-gray-600">Follow our journey across social platforms</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {/* Instagram */}
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Instagram className="w-12 h-12 text-pink-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Instagram</h3>
                  <p className="text-sm text-gray-600 mb-4">Daily updates and behind-the-scenes content</p>
                  <Button className="bg-pink-600 hover:bg-pink-700 text-white">Follow Us</Button>
                </CardContent>
              </Card>

              {/* YouTube */}
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Youtube className="w-12 h-12 text-red-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">YouTube</h3>
                  <p className="text-sm text-gray-600 mb-4">Educational videos and success stories</p>
                  <Button className="bg-red-600 hover:bg-red-700 text-white">Subscribe</Button>
                </CardContent>
              </Card>

              {/* LinkedIn */}
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Linkedin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">LinkedIn</h3>
                  <p className="text-sm text-gray-600 mb-4">Professional updates and career insights</p>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">Connect</Button>
                </CardContent>
              </Card>

              {/* Twitter */}
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Twitter className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Twitter</h3>
                  <p className="text-sm text-gray-600 mb-4">Latest news and announcements</p>
                  <Button className="bg-blue-400 hover:bg-blue-500 text-white">Follow</Button>
                </CardContent>
              </Card>
            </div>

            {/* Embedded Social Feed */}
            <Card>
              <CardHeader>
                <CardTitle>Latest Social Media Posts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg p-4 text-white">
                    <div className="flex items-center gap-2 mb-3">
                      <Instagram className="w-5 h-5" />
                      <span className="font-medium">@pminternship</span>
                    </div>
                    <p className="text-sm mb-3">
                      "From every corner of India to Delhi—where strangers become friends, every voice is heard, and
                      every story matters."
                    </p>
                    <p className="text-xs opacity-80">#IndiaKeInterns</p>
                  </div>

                  <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-lg p-4 text-white">
                    <div className="flex items-center gap-2 mb-3">
                      <Youtube className="w-5 h-5" />
                      <span className="font-medium">PM Internship</span>
                    </div>
                    <p className="text-sm mb-3">
                      "Watch: 76 years of Independence, 7 END - A journey of growth and opportunity for India's youth."
                    </p>
                    <div className="flex items-center gap-2">
                      <Play className="w-4 h-4" />
                      <span className="text-xs">Watch Video</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-4 text-white">
                    <div className="flex items-center gap-2 mb-3">
                      <Twitter className="w-5 h-5" />
                      <span className="font-medium">@MCA21India</span>
                    </div>
                    <p className="text-sm mb-3">
                      "Guided by a shared vision and inspired by a brighter future, PMIS Interns come together to make
                      our 79th Independence Day truly memorable."
                    </p>
                    <p className="text-xs opacity-80">#IndependenceDay #PMInternship</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Events Gallery Tab */}
          <TabsContent value="events">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Events Gallery</h2>
              <p className="text-gray-600">Discover the latest events and interactions from the PM Internship Scheme</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">Event</Badge>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{event.description}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{event.date}</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {event.location}
                      </span>
                    </div>
                    <Button className="w-full mt-3 bg-transparent" variant="outline" size="sm">
                      View Event
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <GovernmentFooter />
    </div>
  )
}
