import { useState } from 'react';
import { LogOut, Home, BookOpen, Image, Users, Info, FileText, RotateCcw, Save, Plus, Trash2 } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useContent, defaultContent } from '@/contexts/ContentContext';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import collegeLogo from '@/assets/college-logo.png';

function LoginForm() {
  const { login } = useAuth();
  const { toast } = useToast();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(username, password)) {
      toast({ title: "Welcome!", description: "You have logged in successfully." });
    } else {
      toast({ title: "Error", description: "Invalid credentials. Try admin/admin123", variant: "destructive" });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <img src={collegeLogo} alt="Logo" className="h-20 w-auto mx-auto mb-4" />
          <CardTitle className="text-2xl">Admin Login</CardTitle>
          <CardDescription>Enter your credentials to access the admin panel</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
              />
            </div>
            <Button type="submit" className="w-full">Login</Button>
          </form>
          <p className="text-xs text-muted-foreground text-center mt-4">
            Demo credentials: admin / admin123
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

function HomeEditor() {
  const { content, updateContent } = useContent();
  const { toast } = useToast();
  const [homeData, setHomeData] = useState(content.home);

  const handleSave = () => {
    updateContent('home', homeData);
    toast({ title: "Saved!", description: "Home page content updated successfully." });
  };

  const updateAnnouncement = (index: number, field: string, value: string) => {
    const newAnnouncements = [...homeData.announcements];
    newAnnouncements[index] = { ...newAnnouncements[index], [field]: value };
    setHomeData({ ...homeData, announcements: newAnnouncements });
  };

  const addAnnouncement = () => {
    setHomeData({
      ...homeData,
      announcements: [...homeData.announcements, { title: 'New Announcement', date: 'Date', description: 'Description' }]
    });
  };

  const removeAnnouncement = (index: number) => {
    setHomeData({
      ...homeData,
      announcements: homeData.announcements.filter((_, i) => i !== index)
    });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Hero Section</h3>
        <div className="grid gap-4">
          <div className="space-y-2">
            <Label>Title</Label>
            <Input value={homeData.heroTitle} onChange={(e) => setHomeData({ ...homeData, heroTitle: e.target.value })} />
          </div>
          <div className="space-y-2">
            <Label>Subtitle</Label>
            <Input value={homeData.heroSubtitle} onChange={(e) => setHomeData({ ...homeData, heroSubtitle: e.target.value })} />
          </div>
          <div className="space-y-2">
            <Label>Tagline</Label>
            <Input value={homeData.heroTagline} onChange={(e) => setHomeData({ ...homeData, heroTagline: e.target.value })} />
          </div>
          <div className="space-y-2">
            <Label>Description</Label>
            <Textarea value={homeData.heroDescription} onChange={(e) => setHomeData({ ...homeData, heroDescription: e.target.value })} />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Why SSSBPUC Section</h3>
        <div className="space-y-2">
          <Label>Title</Label>
          <Input value={homeData.whyUs.title} onChange={(e) => setHomeData({ ...homeData, whyUs: { ...homeData.whyUs, title: e.target.value } })} />
        </div>
        <div className="space-y-2">
          <Label>Description</Label>
          <Textarea value={homeData.whyUs.description} onChange={(e) => setHomeData({ ...homeData, whyUs: { ...homeData.whyUs, description: e.target.value } })} />
        </div>
        <div className="space-y-2">
          <Label>Points (one per line)</Label>
          <Textarea
            value={homeData.whyUs.points.join('\n')}
            onChange={(e) => setHomeData({ ...homeData, whyUs: { ...homeData.whyUs, points: e.target.value.split('\n').filter(p => p.trim()) } })}
            rows={4}
          />
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-lg">Announcements</h3>
          <Button size="sm" onClick={addAnnouncement}><Plus size={16} className="mr-1" /> Add</Button>
        </div>
        {homeData.announcements.map((ann, index) => (
          <Card key={index}>
            <CardContent className="pt-4 space-y-2">
              <div className="flex justify-between items-start">
                <span className="text-sm text-muted-foreground">Announcement {index + 1}</span>
                <Button size="sm" variant="ghost" onClick={() => removeAnnouncement(index)}><Trash2 size={16} /></Button>
              </div>
              <Input placeholder="Title" value={ann.title} onChange={(e) => updateAnnouncement(index, 'title', e.target.value)} />
              <Input placeholder="Date" value={ann.date} onChange={(e) => updateAnnouncement(index, 'date', e.target.value)} />
              <Textarea placeholder="Description" value={ann.description} onChange={(e) => updateAnnouncement(index, 'description', e.target.value)} />
            </CardContent>
          </Card>
        ))}
      </div>

      <Button onClick={handleSave} className="w-full"><Save size={16} className="mr-2" /> Save Changes</Button>
    </div>
  );
}

function AcademicsEditor() {
  const { content, updateContent } = useContent();
  const { toast } = useToast();
  const [data, setData] = useState(content.academics);

  const handleSave = () => {
    updateContent('academics', data);
    toast({ title: "Saved!", description: "Academics content updated successfully." });
  };

  const updateStream = (index: number, field: string, value: any) => {
    const newStreams = [...data.streams];
    newStreams[index] = { ...newStreams[index], [field]: value };
    setData({ ...data, streams: newStreams });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Introduction</h3>
        <div className="space-y-2">
          <Label>Title</Label>
          <Input value={data.intro.title} onChange={(e) => setData({ ...data, intro: { ...data.intro, title: e.target.value } })} />
        </div>
        <div className="space-y-2">
          <Label>Description</Label>
          <Textarea value={data.intro.description} onChange={(e) => setData({ ...data, intro: { ...data.intro, description: e.target.value } })} />
        </div>
      </div>

      {data.streams.map((stream, index) => (
        <div key={index} className="space-y-4 p-4 border rounded-lg">
          <h3 className="font-semibold text-lg">{stream.name}</h3>
          <div className="space-y-2">
            <Label>Description</Label>
            <Textarea value={stream.description} onChange={(e) => updateStream(index, 'description', e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label>Subjects (comma separated)</Label>
            <Textarea value={stream.subjects.join(', ')} onChange={(e) => updateStream(index, 'subjects', e.target.value.split(',').map(s => s.trim()))} />
          </div>
          <div className="space-y-2">
            <Label>Features (one per line)</Label>
            <Textarea value={stream.features.join('\n')} onChange={(e) => updateStream(index, 'features', e.target.value.split('\n').filter(f => f.trim()))} rows={4} />
          </div>
        </div>
      ))}

      <Button onClick={handleSave} className="w-full"><Save size={16} className="mr-2" /> Save Changes</Button>
    </div>
  );
}

function GalleryEditor() {
  const { content, updateContent } = useContent();
  const { toast } = useToast();
  const [data, setData] = useState(content.gallery);

  const handleSave = () => {
    updateContent('gallery', data);
    toast({ title: "Saved!", description: "Gallery content updated successfully." });
  };

  const updateImage = (index: number, field: string, value: string) => {
    const newImages = [...data.images];
    newImages[index] = { ...newImages[index], [field]: value };
    setData({ ...data, images: newImages });
  };

  const addImage = () => {
    setData({
      ...data,
      images: [...data.images, { url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400', caption: 'New Image', category: 'Events' }]
    });
  };

  const removeImage = (index: number) => {
    setData({ ...data, images: data.images.filter((_, i) => i !== index) });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Gallery Settings</h3>
        <div className="space-y-2">
          <Label>Title</Label>
          <Input value={data.title} onChange={(e) => setData({ ...data, title: e.target.value })} />
        </div>
        <div className="space-y-2">
          <Label>Description</Label>
          <Input value={data.description} onChange={(e) => setData({ ...data, description: e.target.value })} />
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-lg">Images</h3>
          <Button size="sm" onClick={addImage}><Plus size={16} className="mr-1" /> Add Image</Button>
        </div>
        <div className="grid gap-4">
          {data.images.map((img, index) => (
            <Card key={index}>
              <CardContent className="pt-4">
                <div className="flex gap-4">
                  <img src={img.url} alt={img.caption} className="w-20 h-20 object-cover rounded" />
                  <div className="flex-1 space-y-2">
                    <Input placeholder="Image URL" value={img.url} onChange={(e) => updateImage(index, 'url', e.target.value)} />
                    <div className="flex gap-2">
                      <Input placeholder="Caption" value={img.caption} onChange={(e) => updateImage(index, 'caption', e.target.value)} />
                      <Input placeholder="Category" value={img.category} onChange={(e) => updateImage(index, 'category', e.target.value)} className="w-32" />
                      <Button size="icon" variant="ghost" onClick={() => removeImage(index)}><Trash2 size={16} /></Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Button onClick={handleSave} className="w-full"><Save size={16} className="mr-2" /> Save Changes</Button>
    </div>
  );
}

function CampusLifeEditor() {
  const { content, updateContent } = useContent();
  const { toast } = useToast();
  const [data, setData] = useState(content.campusLife);

  const handleSave = () => {
    updateContent('campusLife', data);
    toast({ title: "Saved!", description: "Campus Life content updated successfully." });
  };

  const updateSection = (index: number, field: string, value: string) => {
    const newSections = [...data.sections];
    newSections[index] = { ...newSections[index], [field]: value };
    setData({ ...data, sections: newSections });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Page Header</h3>
        <div className="space-y-2">
          <Label>Title</Label>
          <Input value={data.title} onChange={(e) => setData({ ...data, title: e.target.value })} />
        </div>
        <div className="space-y-2">
          <Label>Description</Label>
          <Textarea value={data.description} onChange={(e) => setData({ ...data, description: e.target.value })} />
        </div>
      </div>

      {data.sections.map((section, index) => (
        <div key={index} className="space-y-2 p-4 border rounded-lg">
          <Label>{section.title}</Label>
          <Textarea value={section.description} onChange={(e) => updateSection(index, 'description', e.target.value)} />
        </div>
      ))}

      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Saturday Activities</h3>
        <Textarea
          value={data.saturdayActivities.join('\n')}
          onChange={(e) => setData({ ...data, saturdayActivities: e.target.value.split('\n').filter(a => a.trim()) })}
          rows={5}
        />
      </div>

      <Button onClick={handleSave} className="w-full"><Save size={16} className="mr-2" /> Save Changes</Button>
    </div>
  );
}

function AboutEditor() {
  const { content, updateContent } = useContent();
  const { toast } = useToast();
  const [data, setData] = useState(content.about);

  const handleSave = () => {
    updateContent('about', data);
    toast({ title: "Saved!", description: "About content updated successfully." });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="font-semibold text-lg">History</h3>
        <Textarea value={data.history} onChange={(e) => setData({ ...data, history: e.target.value })} rows={4} />
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Vision</h3>
        <Textarea value={data.vision} onChange={(e) => setData({ ...data, vision: e.target.value })} rows={3} />
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Mission (one per line)</h3>
        <Textarea value={data.mission.join('\n')} onChange={(e) => setData({ ...data, mission: e.target.value.split('\n').filter(m => m.trim()) })} rows={4} />
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Principal's Message</h3>
        <Textarea value={data.principalMessage} onChange={(e) => setData({ ...data, principalMessage: e.target.value })} rows={4} />
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Contact Information</h3>
        <div className="space-y-2">
          <Label>Address</Label>
          <Input value={data.contact.address} onChange={(e) => setData({ ...data, contact: { ...data.contact, address: e.target.value } })} />
        </div>
        <div className="space-y-2">
          <Label>Phone</Label>
          <Input value={data.contact.phone} onChange={(e) => setData({ ...data, contact: { ...data.contact, phone: e.target.value } })} />
        </div>
        <div className="space-y-2">
          <Label>Email</Label>
          <Input value={data.contact.email} onChange={(e) => setData({ ...data, contact: { ...data.contact, email: e.target.value } })} />
        </div>
      </div>

      <Button onClick={handleSave} className="w-full"><Save size={16} className="mr-2" /> Save Changes</Button>
    </div>
  );
}

function AdmissionEditor() {
  const { content, updateContent } = useContent();
  const { toast } = useToast();
  const [data, setData] = useState(content.admission);

  const handleSave = () => {
    updateContent('admission', data);
    toast({ title: "Saved!", description: "Admission content updated successfully." });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Page Header</h3>
        <div className="space-y-2">
          <Label>Title</Label>
          <Input value={data.title} onChange={(e) => setData({ ...data, title: e.target.value })} />
        </div>
        <div className="space-y-2">
          <Label>Description</Label>
          <Textarea value={data.description} onChange={(e) => setData({ ...data, description: e.target.value })} />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Eligibility (one per line)</h3>
        <Textarea value={data.eligibility.join('\n')} onChange={(e) => setData({ ...data, eligibility: e.target.value.split('\n').filter(e => e.trim()) })} rows={4} />
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Required Documents (one per line)</h3>
        <Textarea value={data.documents.join('\n')} onChange={(e) => setData({ ...data, documents: e.target.value.split('\n').filter(d => d.trim()) })} rows={6} />
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Instructions</h3>
        <Textarea value={data.instructions} onChange={(e) => setData({ ...data, instructions: e.target.value })} rows={3} />
      </div>

      <Button onClick={handleSave} className="w-full"><Save size={16} className="mr-2" /> Save Changes</Button>
    </div>
  );
}

function AdminDashboard() {
  const { logout } = useAuth();
  const { resetContent } = useContent();
  const { toast } = useToast();

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset all content to defaults?')) {
      resetContent();
      toast({ title: "Reset Complete", description: "All content has been reset to defaults." });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b border-border sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={collegeLogo} alt="Logo" className="h-10 w-auto" />
            <div>
              <h1 className="font-bold text-foreground">Admin Panel</h1>
              <p className="text-xs text-muted-foreground">Content Management System</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={handleReset}>
              <RotateCcw size={16} className="mr-1" /> Reset All
            </Button>
            <Button variant="outline" size="sm" onClick={logout}>
              <LogOut size={16} className="mr-1" /> Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="home">
          <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-8">
            <TabsTrigger value="home" className="flex items-center gap-1">
              <Home size={16} /> Home
            </TabsTrigger>
            <TabsTrigger value="academics" className="flex items-center gap-1">
              <BookOpen size={16} /> Academics
            </TabsTrigger>
            <TabsTrigger value="gallery" className="flex items-center gap-1">
              <Image size={16} /> Gallery
            </TabsTrigger>
            <TabsTrigger value="campus" className="flex items-center gap-1">
              <Users size={16} /> Campus
            </TabsTrigger>
            <TabsTrigger value="about" className="flex items-center gap-1">
              <Info size={16} /> About
            </TabsTrigger>
            <TabsTrigger value="admission" className="flex items-center gap-1">
              <FileText size={16} /> Admission
            </TabsTrigger>
          </TabsList>

          <Card>
            <CardContent className="pt-6">
              <TabsContent value="home"><HomeEditor /></TabsContent>
              <TabsContent value="academics"><AcademicsEditor /></TabsContent>
              <TabsContent value="gallery"><GalleryEditor /></TabsContent>
              <TabsContent value="campus"><CampusLifeEditor /></TabsContent>
              <TabsContent value="about"><AboutEditor /></TabsContent>
              <TabsContent value="admission"><AdmissionEditor /></TabsContent>
            </CardContent>
          </Card>
        </Tabs>
      </main>
    </div>
  );
}

export default function Admin() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <LoginForm />;
  }

  return <AdminDashboard />;
}
