import logo from './logo.svg'
import logo_dark from './logo_dark.svg'
import cross_icon from './cross_icon.svg'
import menu_icon from './menu_icon.svg'
import star_icon from './star_icon.svg'
import left_arrow from './left_arrow.svg'
import right_arrow from './right_arrow.svg'
// import header_img from './header_img.png'
import brand_img from './brand_img.png'
import project_img_1 from './project_img_1.jpg'
import project_img_2 from './project_img_2.jpg'
import project_img_3 from './project_img_3.jpg'
import project_img_4 from './project_img_4.jpg'
import project_img_5 from './project_img_5.jpg'
import project_img_6 from './project_img_6.jpg'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import profile_img_3 from './profile_img_3.png'

export const assets = {
    logo,
    logo_dark,
    cross_icon,
    menu_icon,
    star_icon,
    // header_img,
    brand_img,
    project_img_1,
    project_img_2,
    project_img_3,
    project_img_4,
    left_arrow,
    right_arrow,
}

export const projectsData = [
    {
      title: "Skyline Haven",
      price: "R$ 3,0 mi",
      location: "São Paulo, SP",
      image: project_img_1
    },
    {
      title: "Vista Azul",
      price: "R$ 1,2 mi",
      location: "Maceió, AL",
      image: project_img_2
    },
    {
      title: "Amanhacer Sereno",
      price: "R$ 2,5 mi",
      location: "Fortaleza, CE",
      image: project_img_3
    },
    {
      title: "Beija-flores",
      price: "R$500 mil",
      location: "Niteroi, RJ",
      image: project_img_4
    },
    {
      title: "Vista Verde",
      price: "R$475 mil",
      location: "Uberaba, MG",
      image: project_img_5
    },
    {
      title: "Florecer Dourado",
      price: "R$ 2 mi",
      location: "Rio de Janeiro, RJ",
      image: project_img_6
    },
    
  ];

  export const testimonialsData = [
    {
        name: "Ronaldo Souza",
        title: "Gerente de Marketing",
        image: profile_img_1,
        alt: "Foto de Ronaldo Souza",
        rating: 5,
        text: "Desde o primeiro atendimento, entenderam exatamente o que eu buscava e me ajudaram a encontrar o imóvel ideal. A atenção aos detalhes e o compromisso com a satisfação do cliente são realmente impressionantes."
    },
    {
        name: "Ricardo Nascimento",
        title: "Designer UI/UX",
        image: profile_img_2,
        alt: "Foto de Ricardo Nascimento",
        rating: 4,
        text: "A equipe foi muito atenciosa em todo o processo. Sempre disponíveis, escutaram minhas necessidades e entregaram um serviço de altíssimo nível. Recomendo com certeza!"
    },
    {
        name: "Juliano Martins",
        title: "Empresário",
        image: profile_img_3,
        alt: "Foto de Juliano Martins",
        rating: 5,
        text: "Encontrei o imóvel perfeito graças ao apoio e dedicação deles. Foram rápidos, eficientes e sempre preocupados em garantir que tudo saísse como o planejado."
    }
];