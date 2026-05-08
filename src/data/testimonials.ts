export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  message: string;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Edgar Moncillier',
    role: 'QA Manager',
    company: 'Deltek',
    message: `I’ve had the pleasure of working with John Paul for almost 3 years as his manager at Deltek. During this time, I’ve been continually impressed by his technical expertise, work ethic, and ability to collaborate with teammates across departments.\n\nJP consistently delivers high-quality software solutions on time and with remarkable attention to detail. His problem-solving skills are outstanding—he has a unique ability to break down complex challenges into manageable steps and always strives to improve his work. He also approaches every task with a clear understanding of both the technical and business needs, which sets him apart.\n\nHe is also an excellent communicator and team player. He has a natural ability to engage with others, share knowledge, and work effectively with cross-functional teams. He is proactive in seeking feedback and is always looking for ways to grow professionally, which speaks volumes about his commitment to continuous improvement.\n\nI have no doubt that JP will continue to excel and grow in his career. He is a dedicated, capable, and driven individual, and any team would be lucky to have him.`,
  },
  {
    id: 2,
    name: 'Anna Katrina Pagsibigan',
    role: 'Team Lead, Sr. Principal QE Engineer',
    company: 'Deltek',
    message:
      'Jayps played a critical role in research and development, assisting in laying the foundation for our AI QE practices. He demonstrates a strong sense of ownership, quickly dives deep into problem areas, and is never hesitant to take initiative—even in ambiguous situations.\n\nJayps has an assertive and collaborative personality. He voices concerns constructively, can propose practical solutions, and has naturally become the go-to person for his peers when guidance or clarity is needed in functional as well as AI setup and configuration. His technical understanding, coupled with his willingness to help others succeed, has had a significant positive impact on the team.\n\nJayps has emerged as a trusted point of contact for his peers, in general, he showed values like technical initiative, a strong quality mindset, and is a strong team player.',
  },
  {
    id: 3,
    name: 'Noah Ratzburg',
    role: 'Software Engineer',
    company: 'Deltek',
    message: `I had the pleasure of working closely with John, a quality control engineer at Deltek, while collaborating on our product. John’s meticulous attention to detail and thorough approach to testing consistently impressed me.\n\nHis professionalism and clear communication stood out in every interaction. Each time I received a ticket from him, it was comprehensive, well-documented, and straightforward. He ensured that all testing processes were thoroughly detailed, and any failures or issues were clearly explained with actionable insights.\n\nJohn’s commitment to quality and his ability to identify and document issues effectively made our workflow smoother and more efficient. I truly appreciated his reliability and the ease of working with someone so dedicated to excellence. I highly recommend John to any team looking for a top-tier QA professional who can elevate the quality of their product.`,
  },
];
