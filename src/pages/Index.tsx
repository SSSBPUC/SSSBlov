import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Award, Calendar, GraduationCap, Heart, Trophy } from 'lucide-react';
import { useContent } from '@/contexts/ContentContext';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Index() {
  const { content } = useContent();
  const { home } = content;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-hero min-h-[70vh] flex items-center">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
              {home.heroTitle}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-2">{home.heroSubtitle}</p>
            <p className="text-2xl md:text-3xl font-semibold text-primary mb-6">{home.heroTagline}</p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {home.heroDescription}
            </p>
            <Link to="/admission" className="btn-admission inline-flex items-center gap-2 text-lg">
              Apply for Admission <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why SSSBPUC */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">{home.whyUs.title}</h2>
            <p className="section-subtitle max-w-2xl mx-auto">{home.whyUs.description}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {home.whyUs.points.map((point, index) => (
              <Card key={index} className="card-hover text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    {index === 0 && <Users className="text-primary" size={32} />}
                    {index === 1 && <Award className="text-primary" size={32} />}
                    {index === 2 && <Heart className="text-primary" size={32} />}
                    {index === 3 && <Trophy className="text-primary" size={32} />}
                  </div>
                  <p className="font-medium text-foreground">{point}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Offered */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">{home.courses.title}</h2>
            <p className="section-subtitle">{home.courses.description}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {home.courses.items.map((course, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                    <GraduationCap className="text-accent" size={24} />
                  </div>
                  <CardTitle className="text-xl">{course}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Link to="/academics" className="text-primary hover:underline inline-flex items-center gap-1">
                    Learn more <ArrowRight size={16} />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Holistic Development */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{home.holistic.title}</h2>
            <p className="text-primary-foreground/80 text-lg">{home.holistic.description}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {home.holistic.points.map((point, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                  {index === 0 && <Trophy size={28} />}
                  {index === 1 && <BookOpen size={28} />}
                  {index === 2 && <Users size={28} />}
                  {index === 3 && <Heart size={28} />}
                </div>
                <p className="font-medium">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Announcements */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Latest Announcements</h2>
            <p className="section-subtitle">Stay updated with the latest news and events</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {home.announcements.map((item, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                    <Calendar size={16} />
                    {item.date}
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Explore More</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/academics" className="group">
              <Card className="card-hover h-full">
                <CardContent className="pt-6 text-center">
                  <BookOpen className="mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" size={48} />
                  <h3 className="text-xl font-semibold mb-2">Academics</h3>
                  <p className="text-muted-foreground">Explore our academic programs and curriculum</p>
                </CardContent>
              </Card>
            </Link>
            <Link to="/gallery" className="group">
              <Card className="card-hover h-full">
                <CardContent className="pt-6 text-center">
                  <Award className="mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" size={48} />
                  <h3 className="text-xl font-semibold mb-2">Gallery</h3>
                  <p className="text-muted-foreground">View photos of our campus and events</p>
                </CardContent>
              </Card>
            </Link>
            <Link to="/campus-life" className="group">
              <Card className="card-hover h-full">
                <CardContent className="pt-6 text-center">
                  <Users className="mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" size={48} />
                  <h3 className="text-xl font-semibold mb-2">Campus Life</h3>
                  <p className="text-muted-foreground">Discover life beyond the classroom</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
