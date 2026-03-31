import { motion } from "motion/react";
import { Mail, Phone, MapPin, Calendar, ExternalLink, ArrowRight, ArrowLeft } from "lucide-react";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ScrollToTop = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);
  return null;
};

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full z-50 bg-paper/80 backdrop-blur-sm border-b border-line">
    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <div className="font-sans text-xl font-bold tracking-tighter">KTW.</div>
      <div className="flex gap-8 text-xs uppercase tracking-widest font-medium">
        <a href="#about" className="hover:text-muted transition-colors">About</a>
        <a href="#projects" className="hover:text-muted transition-colors">Projects</a>
        <a href="#skills" className="hover:text-muted transition-colors">Skills</a>
        <a href="#contact" className="hover:text-muted transition-colors">Contact</a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto border-x border-line">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div className="lg:col-span-7">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-7xl lg:text-9xl leading-[0.9] mb-8"
        >
          CREATIVE<br />DESIGNER
        </motion.h1>
        <Link to="/philosophy" className="block group">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-muted max-w-md text-lg leading-relaxed group-hover:text-ink transition-colors mb-6"
          >
            김태원은 디자인이란 언어를 통해 세계와 소통하고, 세상에 벌어진 '틈(CREVICE)'을 이어나가고자 합니다.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold border-b border-ink pb-1 group-hover:gap-4 transition-all"
          >
            View Details <ArrowRight size={14} />
          </motion.div>
        </Link>
      </div>
      <div className="lg:col-span-5 relative">
        <Link to="/philosophy" className="block group">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="aspect-[3/4] bg-line overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700"
          >
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" 
              alt="Architectural space"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="absolute -bottom-6 -left-6 bg-ink text-paper p-8 max-w-[240px] group-hover:bg-muted transition-colors">
            <p className="text-xs uppercase tracking-widest mb-4 opacity-60">Philosophy</p>
            <p className="font-sans italic text-lg leading-snug">
              "메워진 틈은 사회 전반을 지탱하는 토대가 됩니다."
            </p>
          </div>
        </Link>
      </div>
    </div>
  </section>
);

const Profile = () => (
  <section id="about" className="py-20 px-6 max-w-7xl mx-auto border-x border-b border-line">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div className="lg:col-span-4">
        <h2 className="text-4xl mb-8">Profile</h2>
        <div className="space-y-6 text-sm">
          <div className="flex items-center gap-4">
            <Mail size={16} className="text-muted" />
            <span>ken980504@naver.com</span>
          </div>
          <div className="flex items-center gap-4">
            <Phone size={16} className="text-muted" />
            <span>010-2420-4965</span>
          </div>
          <div className="flex items-center gap-4">
            <Calendar size={16} className="text-muted" />
            <span>1998.05.04</span>
          </div>
          <div className="flex items-center gap-4">
            <MapPin size={16} className="text-muted" />
            <span>경기도 고양시 덕양구 화중로 219</span>
          </div>
        </div>
      </div>
      
      <div className="lg:col-span-4 border-l border-line lg:pl-12">
        <h2 className="text-4xl mb-8">Education</h2>
        <div className="space-y-8">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted mb-1">2019.03 - 2025.03 (Expected)</p>
            <p className="font-bold text-lg">성균관대학교</p>
            <p className="text-muted">디자인학과 시각디자인 전공</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-muted mb-1">2014.03 - 2017.03</p>
            <p className="font-bold text-lg">제주제일고등학교</p>
            <p className="text-muted">졸업</p>
          </div>
        </div>
      </div>

      <div className="lg:col-span-4 border-l border-line lg:pl-12">
        <h2 className="text-4xl mb-8">Experience</h2>
        <div className="space-y-8">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted mb-1">2023.03 - 2024.04</p>
            <p className="font-bold text-lg">주식회사 MKPLUS</p>
            <p className="text-muted">디자인 정규직</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-muted mb-1">2022.01 - 2022.12</p>
            <p className="font-bold text-lg">주식회사 MKPLUS</p>
            <p className="text-muted">디자인 인턴</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ProjectCard = ({ title, period, role, tools, description, image, tags }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="group border-b border-line pb-12 mb-12 last:border-0"
  >
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-7">
        <div className="aspect-video bg-line overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
      <div className="lg:col-span-5 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-3xl">{title}</h3>
            <span className="text-xs font-mono text-muted uppercase tracking-tighter">{period}</span>
          </div>
          <p className="text-sm text-muted mb-6 leading-relaxed">
            {description}
          </p>
          <div className="space-y-4 mb-8">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-muted mb-1">Role</p>
              <p className="text-sm font-medium">{role}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-muted mb-1">Tools</p>
              <p className="text-sm font-medium">{tools}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <span key={tag} className="px-3 py-1 border border-line text-[10px] uppercase tracking-widest">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

const Projects = () => (
  <section id="projects" className="py-20 px-6 max-w-7xl mx-auto border-x border-line">
    <div className="flex justify-between items-end mb-16">
      <h2 className="text-6xl">Selected<br />Works</h2>
      <p className="text-xs uppercase tracking-widest text-muted text-right">
        UI/UX & Creative<br />Portfolio 2021-2024
      </p>
    </div>

    <ProjectCard 
      title="NOLPANG"
      period="2024.03 - 2024.10"
      role="Branding, UX Research, UI Design, Prototyping"
      tools="Figma, Illustrator, Photoshop, ChatGPT"
      description="아이의 놀이와 관련된 정보를 한곳에서 찾고 계획을 수립할 수 있도록 돕는 위치 기반 종합 놀이 정보 플랫폼. 사용자 페르소나 구축 및 페인포인트 분석을 통해 UI 디자인 시스템을 확립했습니다."
      image="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1000"
      tags={["Platform", "Mobile App", "Branding"]}
    />

    <ProjectCard 
      title="EAT DA (잇다)"
      period="2021.02 - 2021.03"
      role="UI Design, UX Research, Prototyping"
      tools="Figma, Illustrator, Photoshop"
      description="식단 관리가 필요한 20~30대 젊은 환자들을 위해 비대면 영양사 매칭 및 커뮤니티 소통 기능을 제공하는 플랫폼. 2021년 SK LOOKIE 지원금 선정 프로젝트."
      image="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=1000"
      tags={["Healthcare", "Community", "Awarded"]}
    />

    <ProjectCard 
      title="Jogyesa Goods"
      period="2023.05"
      role="Product Design, Prototyping"
      tools="Illustrator, Photoshop"
      description="조계사 대웅전 단청 무늬를 현대적으로 재구성한 굿즈 디자인. 외국인 관광객 타겟으로 매출 30% 증가 달성. 패키지 디자인 병행."
      image="https://images.unsplash.com/photo-1528154291023-a6525fabe5b4?auto=format&fit=crop&q=80&w=1000"
      tags={["Product", "Marketing", "Traditional"]}
    />

    <ProjectCard 
      title="KFA U-LEAGUE Design"
      period="2023.03 - 2023.10"
      role="Lead Designer (MKPLUS)"
      tools="Illustrator, Photoshop"
      description="대한축구협회 U-LEAGUE 및 하부 리그 브랜딩 시스템 구축. 엠블럼, 현수막, 트로피 및 시상품 디자인 총괄 기여도 90%."
      image="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=1000"
      tags={["Sports", "Branding", "Event"]}
    />
  </section>
);

const Skills = () => (
  <section id="skills" className="py-20 px-6 max-w-7xl mx-auto border-x border-t border-line bg-ink text-paper">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div className="lg:col-span-4">
        <h2 className="text-5xl mb-8">Expertise</h2>
        <p className="text-muted text-sm leading-relaxed">
          사용자 경험의 빈틈을 꼼꼼하게 채우는 기술적 역량과 기획력을 보유하고 있습니다.
        </p>
      </div>
      <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h4 className="text-xs uppercase tracking-widest mb-6 opacity-50">UI/UX & Prototyping</h4>
          <ul className="space-y-4 font-sans text-2xl">
            <li>Figma</li>
            <li>Adobe XD</li>
            <li>Protopie</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest mb-6 opacity-50">Visual Design</h4>
          <ul className="space-y-4 font-sans text-2xl">
            <li>Photoshop</li>
            <li>Illustrator</li>
            <li>Indesign</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest mb-6 opacity-50">Planning</h4>
          <ul className="space-y-4 font-sans text-2xl">
            <li>UX Persona</li>
            <li>Service Branding</li>
            <li>Storytelling</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest mb-6 opacity-50">Certifications</h4>
          <ul className="space-y-4 font-sans text-2xl">
            <li>GTQ Photoshop 1급</li>
            <li>운전면허 1종 보통</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer id="contact" className="py-20 px-6 max-w-7xl mx-auto border-x border-t border-line">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
      <div>
        <h2 className="text-6xl mb-8 leading-none">LET'S FILL<br />THE GAP.</h2>
        <div className="flex gap-4">
          <a href="mailto:ken980504@naver.com" className="px-6 py-3 bg-ink text-paper text-xs uppercase tracking-widest hover:bg-muted transition-colors">
            Send Email
          </a>
          <button className="px-6 py-3 border border-ink text-xs uppercase tracking-widest hover:bg-ink hover:text-paper transition-all">
            Download CV
          </button>
        </div>
      </div>
      <div className="text-right">
        <p className="text-[10px] uppercase tracking-[0.2em] text-muted mb-4">© 2024 Kim Tae-won Portfolio</p>
        <p className="font-sans italic text-xl">Designed with precision.</p>
      </div>
    </div>
  </footer>
);

const PhilosophyPage = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="min-h-screen bg-paper pt-32 pb-20 px-6"
  >
    <div className="max-w-4xl mx-auto">
      <Link to="/" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest mb-12 hover:text-muted transition-colors">
        <ArrowLeft size={16} /> Back to Home
      </Link>
      
      <h1 className="text-6xl lg:text-8xl font-sans mb-16 leading-none">THE CREVICE<br />PHILOSOPHY</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
        <div className="aspect-[3/4] bg-line overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" 
            alt="Philosophy Visual"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-xs uppercase tracking-widest text-muted mb-4">Core Concept</p>
          <p className="text-3xl font-sans italic leading-relaxed mb-8">
            "메워진 틈은 사회 전반을 지탱하는 토대가 됩니다."
          </p>
          <p className="text-muted leading-relaxed text-lg">
            김태원 디자이너는 세상의 모든 불완전함과 단절을 '틈'으로 정의합니다. 
            그는 디자인이 단순히 심미적인 아름다움을 추구하는 것을 넘어, 
            이러한 틈을 발견하고 연결함으로써 새로운 가치를 창출하는 과정이라고 믿습니다.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32 border-t border-line pt-20">
        <div className="lg:col-span-4">
          <h2 className="text-4xl font-sans">Design<br />Principles</h2>
        </div>
        <div className="lg:col-span-8 space-y-16">
          <div>
            <h3 className="text-xs uppercase tracking-widest text-muted mb-6">01. Discovery (발견)</h3>
            <p className="text-xl max-w-2xl leading-relaxed">
              일상 속에 숨겨진 불편함과 비효율을 '틈'으로 인식하고, 이를 해결하기 위한 깊이 있는 사용자 조사를 수행합니다. 
              표면적인 문제 뒤에 숨겨진 본질적인 원인을 파악하는 것이 모든 프로젝트의 시작입니다.
            </p>
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-widest text-muted mb-6">02. Connection (연결)</h3>
            <p className="text-xl max-w-2xl leading-relaxed">
              단절된 정보와 경험을 디자인이라는 언어로 연결하여 사용자에게 매끄러운(Seamless) 경험을 제공합니다. 
              복잡한 프로세스를 단순화하고, 직관적인 인터페이스를 통해 사용자와 서비스 사이의 거리를 좁힙니다.
            </p>
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-widest text-muted mb-6">03. Foundation (토대)</h3>
            <p className="text-xl max-w-2xl leading-relaxed">
              잘 설계된 디자인은 단순한 해결책을 넘어, 사회의 지속 가능한 발전을 지탱하는 견고한 토대가 됩니다. 
              우리는 오늘 만든 디자인이 내일의 더 나은 사회를 위한 밑거름이 되기를 바랍니다.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-ink text-paper p-12 lg:p-20 mb-32">
        <h2 className="text-4xl font-sans mb-12">Creative Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="text-5xl font-sans mb-4 opacity-30">01</div>
            <h4 className="text-lg font-bold mb-2">Research</h4>
            <p className="text-sm text-muted">사용자 인터뷰, 시장 분석, 페르소나 설정을 통해 문제의 핵심을 파고듭니다.</p>
          </div>
          <div>
            <div className="text-5xl font-sans mb-4 opacity-30">02</div>
            <h4 className="text-lg font-bold mb-2">Ideation</h4>
            <p className="text-sm text-muted">브레인스토밍과 스케치를 통해 '틈'을 메울 수 있는 다양한 창의적 대안을 모색합니다.</p>
          </div>
          <div>
            <div className="text-5xl font-sans mb-4 opacity-30">03</div>
            <h4 className="text-lg font-bold mb-2">Execution</h4>
            <p className="text-sm text-muted">정교한 프로토타이핑과 테스트를 거쳐 완성도 높은 최종 결과물을 도출합니다.</p>
          </div>
        </div>
      </div>

      <div className="text-center py-20 border-t border-line">
        <p className="text-xs uppercase tracking-widest text-muted mb-8">Ready to collaborate?</p>
        <Link to="/#contact" className="text-5xl lg:text-7xl font-sans hover:italic transition-all">
          Let's Fill the Gap.
        </Link>
      </div>
    </div>
  </motion.div>
);

const MainPage = () => (
  <>
    <Navbar />
    <Hero />
    <Profile />
    <Projects />
    <Skills />
    <Footer />
  </>
);

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/philosophy" element={<PhilosophyPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
