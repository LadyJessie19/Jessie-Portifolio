interface IProps {
  img: any;
}

import { Link } from "react-router-dom";
import { StyledLogoComponent } from "../../styles/ReusableStyles";
import { useLanguage } from "../../contexts/LanguageProvider";
import { useEffect, useState } from "react";

const Logo = ({ img }: IProps) => {
  const { language } = useLanguage() || { language: "EN-US" };

  const [isVisible, setIsVisible] = useState(true);

  // Função para controlar a visibilidade do header
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const windowWidth = window.innerWidth;

    if (currentScrollY > 50 && windowWidth < 500) {
      setIsVisible(false); // Esconder se rolou mais de 50px
    } else {
      setIsVisible(true); // Mostrar se está no topo da página
    }
  };

  useEffect(() => {
    // Adiciona o evento de scroll
    window.addEventListener("scroll", handleScroll);

    // Limpa o evento ao desmontar o componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <StyledLogoComponent>
        <Link to={language === "EN-US" ? "/us" : "/br"}>
          {" "}
          <img
            src={img}
            alt="logo"
            style={{
              display: isVisible ? "block" : "none",
              transition: "all 0.5s ease",
            }}
          />{" "}
        </Link>
      </StyledLogoComponent>
    </>
  );
};
// consertar o to="/us" e pegar pelo contexto
// esconder o logo nas telas menores
export default Logo;
