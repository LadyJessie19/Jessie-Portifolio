import TinySideBar from "../../../reusable/TinySideBar";
import {
  StyledContainerSecondaryPage,
  StyledHeaderHomePage,
} from "../../../../styles/ReusableStyles";
import GlobalStyle from "../../../../styles/Global";
import HeaderSection from "../Home/HeaderSection";

import Footer from "../../../reusable/Footer";
import SecondaryPageTitle from "../../../reusable/SecondaryPageTitle";
import SecondaryPageSection from "../../../reusable/SecondaryPageSection";
import BigProjectCard from "../../../reusable/BigProjectCard";
import GeneralCard from "../../../reusable/GeneralCard";
import SmallProjectCard from "../../../reusable/SmallProjectCard";

import biggerProjects from "../../data/biggerProjects";
import designUX from "../../data/designUX";
import blogPosts from "../../data/blogPosts";
import javaProjects from "../../data/javaProjects";
import smallerProjects from "../../data/smallerProjects";

import projectInfo from "../../data/_projectsData";
import Decorations from "../../../reusable/Decorations";

const ProjectsPt = () => {
  return (
    <>
      <GlobalStyle />
      <TinySideBar />
      <Decorations size="big" />

      <StyledHeaderHomePage>
        <HeaderSection />
      </StyledHeaderHomePage>

      <SecondaryPageTitle
        title={projectInfo.pageTitle}
        description={projectInfo.pageDescription}
      />

      <SecondaryPageSection title={projectInfo.pageSectionTitleOne}>
        <StyledContainerSecondaryPage>
          {biggerProjects.map((item) => {
            return (
              <BigProjectCard
                img={item.img}
                tools={item.tools}
                name={item.name}
                description={item.description}
                link={item.link}
                button={item.button}
              />
            );
          })}
        </StyledContainerSecondaryPage>
      </SecondaryPageSection>

      <SecondaryPageSection title={projectInfo.pageSectionTitleTwo}>
        <StyledContainerSecondaryPage>
          {smallerProjects.map((item) => {
            return (
              <SmallProjectCard
                tools={item.tools}
                title={item.title}
                description={item.description}
                button={item.button}
                link={item.link}
              />
            );
          })}
        </StyledContainerSecondaryPage>
      </SecondaryPageSection>

      <SecondaryPageSection title={projectInfo.pageSectionTitleThree}>
        <StyledContainerSecondaryPage>
          {javaProjects.map((item) => {
            return (
              <BigProjectCard
                img={item.img}
                tools={item.tools}
                name={item.name}
                description={item.description}
                link={item.link}
                button={item.button}
              />
            );
          })}
        </StyledContainerSecondaryPage>
      </SecondaryPageSection>

      <SecondaryPageSection title={projectInfo.pageSectionTitleFour}>
        <StyledContainerSecondaryPage>
          {designUX.map((item) => {
            return (
              <GeneralCard
                img={item.img}
                title={item.name}
                description={item.description}
                link={item.link}
                button={item.button}
              />
            );
          })}
        </StyledContainerSecondaryPage>
      </SecondaryPageSection>

      <SecondaryPageSection
        title={projectInfo.pageSectionTitleFive}
        id={projectInfo.pageSectionTitleFive}>
        <StyledContainerSecondaryPage>
          {blogPosts.map((item) => {
            return (
              <GeneralCard
                img={item.img}
                title={item.title}
                link={item.link}
                button={item.button}
                description={item.description}
              />
            );
          })}
        </StyledContainerSecondaryPage>
      </SecondaryPageSection>

      <Footer />
    </>
  );
};

export default ProjectsPt;
