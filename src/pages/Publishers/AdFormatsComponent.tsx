import React, { useState } from 'react';
import { 
  Monitor,
  Bell,
  FileText,
  Play,
  Image,
  ExternalLink
} from 'lucide-react';
import {
  AdFormatsSection,
  AdFormatsContainer,
  TabNavigation,
  TabButton,
  TabContent,
  TabContentLayout,
  TabImageSection,
  TabImage,
  TabTextSection,
  TabTitle,
  TabDescription,
  Container,
  SectionTitle,
  SectionSubtitle
} from './Publishers.styles';

interface AdFormat {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: React.ComponentType<any>;
}

const adFormats: AdFormat[] = [
  {
    id: 'socialbar',
    title: 'SocialBar Ads',
    description: 'Social Bar offers publishers the ability to embed a floating bar on their website, allowing them to promote products, increase engagement, and drive social media conversions. Publishers achieve higher CPMs while advertising with Adsfizz in comparison with web push ads. Social Bar is designed for dynamic content with rich icons, videos, custom banners, and countdown timers to boost conversions.',
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    icon: Monitor
  },
  {
    id: 'push',
    title: 'Push-Notification',
    description: 'Push ads are a form of digital advertising that are delivered directly to users\' devices, appearing as notifications on their screens, regardless of whether they are actively visiting your website. The most advanced replacement to web push ads. Push Ads by Adsfizz don\'t require opt-ins; they are an excellent monetization solution. You can either use the built-in, animated templates or create your own.',
    image: 'https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    icon: Bell
  },
  {
    id: 'native',
    title: 'Native Ads',
    description: 'Native ads seamlessly blend into websites or applications in a contextual style, providing a non-disruptive user experience. The ad formats resemble your site\'s products or content. With Adsfizz, advertisers run AdBlock-resistant campaigns for maximum reach and CPA native ads campaigns. With over 1 BN impressions daily, our native banners blend in web and mobile content and have a 10x higher click-through rate compared to classic display ads.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    icon: FileText
  },
  {
    id: 'video',
    title: 'Video Ads',
    description: 'Video ads use captivating videos to deliver marketing messages to your users through audiovisual storytelling. A short video that appears before the main content. The user can skip it after a few seconds. Video ads include VAST/VPAID tags, or host your videos. Video ads have the greatest online impact; a brand video, a movie/game trailer, an animated teaser, etc.',
    image: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    icon: Play
  },
  {
    id: 'banner',
    title: 'Banner Ads',
    description: 'Banners are graphical elements typically displayed at the top, bottom, or side of a webpage. They serve as a visual advertisement to convey information about a product, service, or brand. They convey messages in a concise and eye-catching manner. Online banner campaigns deliver unprecedented performance. Publishers using banner ads can access reliable traffic sources from 18K publishers daily with an estimated 800M impressions from customers that are ready to buy. Publishers earn 100% of banner impressions, leading to higher payouts.',
    image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    icon: Image
  },
  {
    id: 'popunder',
    title: 'Popunder Ads',
    description: 'Pop-under ads are a type of online advertising that appears in a new browser window or tab behind the current window, allowing users to continue browsing without interruption. They only become visible when they close or minimize their current browser window. The Adsfizz pop-under script delivers a 100% visible ad to the user. It is the best solution to promote an app, a landing page, or a website.',
    image: 'https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    icon: ExternalLink
  }
];

export const AdFormatsComponent: React.FC = () => {
  const [activeFormat, setActiveFormat] = useState<string>('socialbar');

  const currentFormat = adFormats.find(format => format.id === activeFormat) || adFormats[0];

  return (
    <AdFormatsSection>
      <Container>
        <SectionTitle>Ad Formats</SectionTitle>
        <SectionSubtitle>
          Explore our comprehensive range of high-performance ad formats designed to maximize your revenue 
          while providing excellent user experience across all devices and platforms.
        </SectionSubtitle>
        
        <AdFormatsContainer>
          <TabNavigation>
            {adFormats.map((format) => (
              <TabButton
                key={format.id}
                isActive={activeFormat === format.id}
                onClick={() => setActiveFormat(format.id)}
                type="button"
              >
                <format.icon size={28} />
                <span>{format.title}</span>
              </TabButton>
            ))}
          </TabNavigation>

          <TabContent>
            <TabContentLayout>
              <TabImageSection>
                <TabImage 
                  src={currentFormat.image}
                  alt={`${currentFormat.title} illustration`}
                />
              </TabImageSection>
              
              <TabTextSection>
                <TabTitle>{currentFormat.title}</TabTitle>
                <TabDescription>{currentFormat.description}</TabDescription>
              </TabTextSection>
            </TabContentLayout>
          </TabContent>
        </AdFormatsContainer>
      </Container>
    </AdFormatsSection>
  );
};

export default AdFormatsComponent;