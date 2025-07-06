import svgPaths from "./svg-gpkt0l4rxk";
import imgLogo from "figma:asset/c5360c72c9074bd4f8157d7552b8f87661e1d57e.png";
import imgBackground from "figma:asset/e6cdcf054e9b34ff54de2dc9e20d0c2135fb623d.png";
import imgBackground1 from "figma:asset/03b422cc0ad5e9974b65a9c97b4afcc368fc2972.png";
import imgGradientImage from "figma:asset/5875e6a327c88ae7c33dcc3c519d1ca52959285b.png";
import imgGradientImage1 from "figma:asset/b8cdeb20dee8e3e2cd68e7c06e16c3348f6b5be7.png";
import imgGradientImage2 from "figma:asset/cbc97234358520501f759beba77d384cbaff3a8b.png";
import imgGradientImage3 from "figma:asset/d380e56728df1924a5f1622cb9728af8a194c3ad.png";

function Logo() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat h-[29.89px] max-h-[50px] shrink-0 w-[150px]"
      data-name="Logo"
      style={{ backgroundImage: `url('${imgLogo}')` }}
    />
  );
}

function Link() {
  return (
    <a
      className="box-border content-stretch cursor-pointer flex flex-row h-[50px] items-center justify-start overflow-visible p-0 relative shrink-0"
      data-name="Link"
      href="https://in-reset.com/#hero"
    >
      <Logo />
    </a>
  );
}

function Logo1() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-[50px] items-start justify-start pl-[30px] pr-0 py-0 relative shrink-0"
      data-name="Logo"
    >
      <Link />
    </div>
  );
}

function Link1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pb-[3.66px] pt-[3.5px] px-2 relative shrink-0"
      data-name="Link"
    >
      <a
        className="[white-space-collapse:collapse] flex flex-col font-['Saira_Condensed:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16.8px] text-left text-nowrap"
        href="https://in-reset.com/#nosotros"
      >
        <p className="block cursor-pointer leading-[20.16px] whitespace-pre">
          Sobre Nosotros
        </p>
      </a>
    </div>
  );
}

function Item() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px px-2 py-0 relative shrink-0"
      data-name="Item"
    >
      <Link1 />
    </div>
  );
}

function ItemMargin() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-center pl-5 pr-0 py-0 relative self-stretch shrink-0"
      data-name="Item:margin"
    >
      <Item />
    </div>
  );
}

function Link2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pb-[3.66px] pt-[3.5px] px-2 relative shrink-0"
      data-name="Link"
    >
      <a
        className="[white-space-collapse:collapse] flex flex-col font-['Saira_Condensed:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16.8px] text-left text-nowrap"
        href="https://in-reset.com/#contacto"
      >
        <p className="block cursor-pointer leading-[20.16px] whitespace-pre">
          Contacto
        </p>
      </a>
    </div>
  );
}

function Item1() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px px-2 py-0 relative shrink-0"
      data-name="Item"
    >
      <Link2 />
    </div>
  );
}

function ItemMargin1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-center pl-5 pr-[30px] py-0 relative self-stretch shrink-0"
      data-name="Item:margin"
    >
      <Item1 />
    </div>
  );
}

function List() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[0.01px] items-start justify-start pl-0 pr-4 py-0 relative shrink-0"
      data-name="List"
    >
      <ItemMargin />
      <ItemMargin1 />
    </div>
  );
}

function Navegar() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row grow items-center justify-end min-h-px min-w-px p-0 relative shrink-0"
      data-name="Navegar"
    >
      <List />
    </div>
  );
}

function Container() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Container"
    >
      <Logo1 />
      <Navegar />
    </div>
  );
}

function Nav() {
  return (
    <div
      className="backdrop-blur-[8.15px] backdrop-filter bg-[rgba(255,255,255,0.01)] box-border content-stretch flex flex-row items-center justify-start min-h-[60px] pb-[7.4px] pt-[6.4px] px-0 shrink-0 sticky top-0 w-full"
      data-name="Nav"
    >
      <div className="absolute border-[0px_0px_1px] border-[rgba(168,85,247,0.2)] border-solid inset-0 pointer-events-none" />
      <Container />
    </div>
  );
}

function Heading1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Heading 1"
    >
      <div
        className="[text-shadow:rgba(0,0,0,0.4)_0px_4px_12px] flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[79.8438px] text-left tracking-[-2.4px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[68px]">Educación</p>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Heading 1"
    >
      <div
        className="[text-shadow:rgba(0,0,0,0.4)_0px_4px_12px] flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[77.9688px] text-left tracking-[-2.4px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[68px]">Tecnología</p>
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Heading 1"
    >
      <div
        className="[text-shadow:rgba(0,0,0,0.4)_0px_4px_12px] flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[79.5312px] text-left tracking-[-2.4px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[68px]">Experiencias</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <Heading1 />
      <Heading4 />
      <Heading6 />
    </div>
  );
}

function InfoPrincipal() {
  return (
    <div
      className="[flex-flow:wrap] box-border content-center flex gap-[114px] h-[236px] items-center justify-between p-0 relative shrink-0 w-full"
      data-name="InfoPrincipal"
    >
      <Container1 />
      <div className="flex flex-col font-['Saira_Condensed:Light',_sans-serif] justify-center leading-[31.2px] not-italic relative shrink-0 text-[20.8px] text-[rgba(255,255,255,0.8)] text-center text-nowrap whitespace-pre">
        <p className="mb-0">
          <span>{`Creamos `}</span>
          <span className="font-['Saira_Condensed:Medium',_sans-serif] not-italic text-violet-500">
            ecosistemas
          </span>
          <span>{` inmersivos donde las`}</span>
        </p>
        <p className="block mb-0">mujeres descubren su poder transformador.</p>
        <p className="mb-0">
          <span className="font-['Saira_Condensed:Medium',_sans-serif] text-[#a06fff]">
            Innovación Tech
          </span>
          <span className="font-['Saira_Condensed:Light',_sans-serif]">{` que convierte el`}</span>
        </p>
        <p className="block">aprendizaje en acción real</p>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start px-8 py-0 relative shrink-0"
      data-name="Component 1"
    >
      <div className="flex flex-col font-['Saira_Condensed:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-left text-nowrap text-violet-500">
        <p className="block leading-[24px] whitespace-pre">
          Premios Fundadoras 2024
        </p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <Component1 />
    </div>
  );
}

function Component3() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start px-8 py-0 relative shrink-0"
      data-name="Component 1"
    >
      <div className="flex flex-col font-['Saira_Condensed:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-left text-nowrap text-violet-500">
        <p className="block leading-[24px] whitespace-pre">
          Featured Las Provincias
        </p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[0.01px] items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <Component3 />
    </div>
  );
}

function Component4() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start mr-[-0.01px] px-8 py-0 relative shrink-0"
      data-name="Component 1"
    >
      <div className="flex flex-col font-['Saira_Condensed:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-left text-nowrap text-violet-500">
        <p className="block leading-[24px] whitespace-pre">Premio UE Madrid</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start pl-0 pr-[0.01px] py-0 relative shrink-0"
      data-name="Container"
    >
      <Component4 />
    </div>
  );
}

function Component5() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start px-8 py-0 relative shrink-0"
      data-name="Component 1"
      style={{ marginRight: "-8.52651e-14px" }}
    >
      <div className="flex flex-col font-['Saira_Condensed:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-left text-nowrap text-violet-500">
        <p className="block leading-[24px] whitespace-pre">
          Social Nest Foundation
        </p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start pl-0 py-0 relative shrink-0"
      data-name="Container"
      style={{ paddingRight: "8.52651e-14px" }}
    >
      <Component5 />
    </div>
  );
}

function Component6() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start px-8 py-0 relative shrink-0"
      data-name="Component 1"
    >
      <div className="flex flex-col font-['Saira_Condensed:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-left text-nowrap text-violet-500">
        <p className="block leading-[24px] whitespace-pre">
          Valencia Plaza Interview
        </p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Container"
      style={{ gap: "2.84217e-14px" }}
    >
      <Component6 />
    </div>
  );
}

function Component7() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start px-8 py-0 relative shrink-0"
      data-name="Component 1"
      style={{ marginRight: "-8.52651e-14px" }}
    >
      <div className="flex flex-col font-['Saira_Condensed:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-left text-nowrap text-violet-500">
        <p className="block leading-[24px] whitespace-pre">FORINVEST 2024</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start pl-0 py-0 relative shrink-0"
      data-name="Container"
      style={{ paddingRight: "8.52651e-14px" }}
    >
      <Component7 />
    </div>
  );
}

function Component8() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start px-8 py-0 relative shrink-0"
      data-name="Component 1"
      style={{ marginRight: "-2.84217e-14px" }}
    >
      <div className="flex flex-col font-['Saira_Condensed:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-left text-nowrap text-violet-500">
        <p className="block leading-[24px] whitespace-pre">VDS 2024</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start pl-0 py-0 relative shrink-0"
      data-name="Container"
      style={{ paddingRight: "2.84217e-14px" }}
    >
      <Component8 />
    </div>
  );
}

function Component9() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start px-8 py-0 relative shrink-0"
      data-name="Component 1"
    >
      <div className="flex flex-col font-['Saira_Condensed:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-left text-nowrap text-violet-500">
        <p className="block leading-[24px] whitespace-pre">
          Premios Fundadoras 2024
        </p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Container"
      style={{ gap: "1.42109e-13px" }}
    >
      <Component9 />
    </div>
  );
}

function Logros() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start overflow-clip p-0 relative shrink-0 w-full"
      data-name="Logros"
    >
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
      <Container6 />
      <Container7 />
      <Container8 />
      <Container9 />
      <Container3 />
      <Container4 />
      <Container5 />
    </div>
  );
}

function Hero() {
  return (
    <div className="min-h-[1200px] relative shrink-0 w-full" data-name="Hero">
      <div className="flex flex-col items-center justify-center min-h-inherit overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[419px] items-center justify-center min-h-inherit pb-[63px] pt-[317.2px] px-[126px] relative w-full">
          <InfoPrincipal />
          <Logros />
        </div>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div
      className="box-border content-stretch flex flex-col font-['Saira_Condensed:Light',_sans-serif] items-center justify-center leading-[0] not-italic pt-0 px-0 relative shrink-0 text-center text-nowrap w-full"
      data-name="Heading 2"
      style={{ paddingBottom: "5.68434e-14px" }}
    >
      <div
        className="[text-shadow:rgba(0,0,0,0.3)_0px_2px_4px] flex flex-col justify-center relative shrink-0 text-[#ffffff] text-[48px] tracking-[-0.96px]"
        style={{ marginBottom: "-5.68434e-14px" }}
      >
        <p className="leading-[57.6px] text-nowrap whitespace-pre">
          <span>{`Sobre `}</span>
          <span className="font-['Saira_Condensed:Light',_sans-serif] not-italic text-[#6f26ff]">
            Nosotros
          </span>
          <span className="adjustLetterSpacing">&nbsp;</span>
        </p>
      </div>
      <div
        className="flex flex-col justify-center relative shrink-0 text-[20px] text-[rgba(255,255,255,0.8)]"
        style={{ marginBottom: "-5.68434e-14px" }}
      >
        <p className="block leading-[32px] text-nowrap whitespace-pre">
          ¿Qué nos hace diferentes?.
        </p>
      </div>
    </div>
  );
}

function Quien() {
  return (
    <div
      className="basis-0 bg-[rgba(255,255,255,0.03)] grow h-[180px] max-w-[450px] min-h-[180px] min-w-[400px] relative rounded-xl shrink-0"
      data-name="QUIEN"
    >
      <div className="absolute border border-[rgba(139,92,246,0.25)] border-solid inset-0 pointer-events-none rounded-xl shadow-[0px_4px_20px_0px_rgba(139,92,246,0.15)]" />
      <div className="max-w-inherit min-h-inherit min-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[30px] h-[180px] items-start justify-start leading-[0] max-w-inherit min-h-inherit min-w-inherit p-[25px] relative text-left w-full">
          <div
            className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center max-h-[27.04px] relative shrink-0 text-[#ffffff] text-[20.8px] w-full"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="block leading-[27px]">Quiénes Somos</p>
          </div>
          <div className="flex flex-col font-['Saira_Condensed:Light',_sans-serif] justify-center not-italic relative shrink-0 text-[14.4px] text-[rgba(255,255,255,0.7)] w-full">
            <p className="block leading-[23.04px]">
              Somos la plataforma EdTech-HealthTech que convierte retos en
              proyectos escalables. Transformamos cada desafío en oportunidades
              de impacto real.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Mision() {
  return (
    <div
      className="basis-0 bg-[rgba(255,255,255,0.03)] grow h-[180px] max-w-[450px] min-h-[180px] min-w-[400px] relative rounded-xl shrink-0"
      data-name="MISION"
    >
      <div className="absolute border border-[rgba(139,92,246,0.25)] border-solid inset-0 pointer-events-none rounded-xl shadow-[0px_4px_20px_0px_rgba(139,92,246,0.15)]" />
      <div className="max-w-inherit min-h-inherit min-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[30px] h-[180px] items-start justify-start leading-[0] max-w-inherit min-h-inherit min-w-inherit p-[25px] relative text-left w-full">
          <div
            className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center max-h-[27.04px] relative shrink-0 text-[#ffffff] text-[20.8px] w-full"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="block leading-[27px]">Nuestra Misión</p>
          </div>
          <div className="flex flex-col font-['Saira_Condensed:Light',_sans-serif] justify-center not-italic relative shrink-0 text-[14.4px] text-[rgba(255,255,255,0.7)] w-full">
            <p className="block leading-[23.04px]">
              Creemos que cada mujer puede resetear su futuro y crear valor
              exponencial. Convertimos problemas en soluciones escalables que
              transforman sectores completos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CardsNosotros() {
  return (
    <div
      className="[flex-flow:wrap] box-border content-center flex gap-[76px] items-center justify-center p-0 relative shrink-0 w-full"
      data-name="Cards Nosotros"
    >
      <Quien />
      <Mision />
    </div>
  );
}

function Container13() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-center p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Font_Awesome_5_Free:Solid',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-center text-nowrap text-violet-500">
        <p className="block leading-[32px] whitespace-pre"></p>
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Heading 5"
    >
      <div className="flex flex-col font-['Tomorrow:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[17.6px] text-center text-nowrap tracking-[-0.088px]">
        <p className="adjustLetterSpacing block leading-[21.12px] whitespace-pre">
          EdTech
        </p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Saira_Condensed:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13.6px] text-[rgba(255,255,255,0.7)] text-center text-nowrap">
        <p className="block leading-[20.4px] whitespace-pre">
          Educación tecnológica innovadora
        </p>
      </div>
    </div>
  );
}

function EdTech() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[11px] items-center justify-start p-0 relative shrink-0 w-[213px]"
      data-name="EdTech"
    >
      <Container13 />
      <Heading5 />
      <Container14 />
    </div>
  );
}

function Heading7() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Heading 5"
    >
      <div className="flex flex-col font-['Tomorrow:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[17.6px] text-center text-nowrap tracking-[-0.088px]">
        <p className="adjustLetterSpacing block leading-[21.12px] whitespace-pre">
          HealthTech
        </p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Saira_Condensed:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13.6px] text-[rgba(255,255,255,0.7)] text-center text-nowrap">
        <p className="block leading-[20.4px] whitespace-pre">
          Soluciones de salud digital
        </p>
      </div>
    </div>
  );
}

function HealthTech() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[11px] items-center justify-start p-0 relative shrink-0 w-[213px]"
      data-name="HealthTech"
    >
      <div className="flex flex-col font-['Font_Awesome_5_Free:Solid',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-center text-violet-500 w-full">
        <p className="block leading-[32px]"></p>
      </div>
      <Heading7 />
      <Container15 />
    </div>
  );
}

function Heading8() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Heading 5"
    >
      <div className="flex flex-col font-['Tomorrow:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[17.6px] text-center text-nowrap tracking-[-0.088px]">
        <p className="adjustLetterSpacing block leading-[21.12px] whitespace-pre">
          Impacto
        </p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Saira_Condensed:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13.6px] text-[rgba(255,255,255,0.7)] text-center text-nowrap">
        <p className="block leading-[20.4px] whitespace-pre">
          Proyectos con impacto real
        </p>
      </div>
    </div>
  );
}

function Impacto() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[11px] items-center justify-start p-0 relative shrink-0 w-[213px]"
      data-name="Impacto"
    >
      <div className="flex flex-col font-['Font_Awesome_5_Free:Solid',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-center text-violet-500 w-full">
        <p className="block leading-[32px]"></p>
      </div>
      <Heading8 />
      <Container16 />
    </div>
  );
}

function Heading9() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Heading 5"
    >
      <div className="flex flex-col font-['Tomorrow:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[17.6px] text-center text-nowrap tracking-[-0.088px]">
        <p className="adjustLetterSpacing block leading-[21.12px] whitespace-pre">
          Mujeres
        </p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Saira_Condensed:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13.6px] text-[rgba(255,255,255,0.7)] text-center text-nowrap">
        <p className="block leading-[20.4px] whitespace-pre">
          Diseñado por y para mujeres
        </p>
      </div>
    </div>
  );
}

function Mujeres() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[11px] items-center justify-start p-0 relative shrink-0 w-[213px]"
      data-name="Mujeres"
    >
      <div className="flex flex-col font-['Font_Awesome_5_Free:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-center text-violet-500 w-full">
        <p className="block leading-[32px]"></p>
      </div>
      <Heading9 />
      <Container17 />
    </div>
  );
}

function Medallas() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0 w-full"
      data-name="Medallas"
    >
      <EdTech />
      <HealthTech />
      <Impacto />
      <Mujeres />
    </div>
  );
}

function SobreNosotros() {
  return (
    <div className="relative shrink-0 w-full" data-name="Sobre Nosotros">
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-24 items-center justify-center pb-[100px] pl-[26px] pr-[23px] pt-[60px] relative w-full">
          <Heading2 />
          <CardsNosotros />
          <Medallas />
        </div>
      </div>
    </div>
  );
}

function Heading10() {
  return (
    <div
      className="box-border content-stretch flex flex-col font-['Saira_Condensed:Light',_sans-serif] items-center justify-center leading-[0] not-italic pt-0 px-0 relative shrink-0 text-center w-[560px]"
      data-name="Heading 2"
      style={{ paddingBottom: "5.68434e-14px" }}
    >
      <div
        className="[text-shadow:rgba(0,0,0,0.3)_0px_2px_4px] flex flex-col justify-center relative shrink-0 text-[#ffffff] text-[48px] tracking-[-0.96px] w-full"
        style={{ marginBottom: "-5.68434e-14px" }}
      >
        <p className="leading-[57.6px] whitespace-pre-wrap">
          <span>{`Metodología de la  `}</span>
          <span className="font-['Saira_Condensed:Light',_sans-serif] not-italic text-[#6f26ff]">
            Innovación
          </span>
          &nbsp;
        </p>
      </div>
      <div
        className="flex flex-col justify-center relative shrink-0 text-[20px] text-[rgba(255,255,255,0.8)] w-full"
        style={{ marginBottom: "-5.68434e-14px" }}
      >
        <p className="block leading-[32px]">
          Creadores de soluciones transformadoras.
        </p>
      </div>
    </div>
  );
}

function Card01() {
  return (
    <div
      className="basis-0 bg-[rgba(255,255,255,0.03)] grow max-w-[350px] min-h-[200px] min-w-[300px] relative rounded-xl shrink-0"
      data-name="card01"
    >
      <div className="absolute border border-[rgba(139,92,246,0.25)] border-solid inset-0 pointer-events-none rounded-xl shadow-[0px_4px_20px_0px_rgba(139,92,246,0.15)]" />
      <div className="flex flex-col items-center justify-center max-w-inherit min-h-inherit min-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col gap-6 items-center justify-center leading-[0] max-w-inherit min-h-inherit min-w-inherit p-[17px] relative text-center w-full">
          <div className="flex flex-col font-['Saira_Condensed:Light',_sans-serif] justify-center not-italic relative shrink-0 text-[28.8px] text-violet-500 w-full">
            <p className="block leading-[28.8px]">01</p>
          </div>
          <div
            className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[#ffffff] text-[18.9px] w-full"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="block leading-[24.96px]">Identificación de Nichos</p>
          </div>
          <div className="flex flex-col font-['Saira_Condensed:Light',_sans-serif] h-24 justify-center leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.7)] w-full">
            <p className="block mb-0">Detectamos problemas específicos y</p>
            <p className="block mb-0">
              oportunidades únicas en el mercado a través
            </p>
            <p className="block mb-0">de análisis profundo y metodologías</p>
            <p className="block">especializadas.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card02() {
  return (
    <div
      className="basis-0 bg-[rgba(255,255,255,0.03)] grow max-w-[350px] min-h-[200px] min-w-[300px] relative rounded-xl shrink-0"
      data-name="card02"
    >
      <div className="absolute border border-[rgba(139,92,246,0.25)] border-solid inset-0 pointer-events-none rounded-xl shadow-[0px_4px_20px_0px_rgba(139,92,246,0.15)]" />
      <div className="flex flex-col items-center justify-center max-w-inherit min-h-inherit min-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col gap-6 items-center justify-center leading-[0] max-w-inherit min-h-inherit min-w-inherit p-[17px] relative text-center w-full">
          <div className="flex flex-col font-['Saira_Condensed:Light',_sans-serif] justify-center not-italic relative shrink-0 text-[28.8px] text-violet-500 w-full">
            <p className="block leading-[28.8px]">02</p>
          </div>
          <div
            className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[#ffffff] text-[18.9px] w-full"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="block leading-[24.96px]">Soluciones a Medida</p>
          </div>
          <div className="flex flex-col font-['Saira_Condensed:Light',_sans-serif] h-24 justify-center leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.7)] w-full">
            <p className="block mb-0">
              Combinamos tecnología, educación y experiencias p
            </p>
            <p className="block mb-0">{`ara crear soluciones innovadoras, efectivas y `}</p>
            <p className="block">adaptadas a cada contexto específico.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card03() {
  return (
    <div
      className="basis-0 bg-[rgba(255,255,255,0.03)] grow max-w-[350px] min-h-[200px] min-w-[300px] relative rounded-xl shrink-0"
      data-name="card03"
    >
      <div className="absolute border border-[rgba(139,92,246,0.25)] border-solid inset-0 pointer-events-none rounded-xl shadow-[0px_4px_20px_0px_rgba(139,92,246,0.15)]" />
      <div className="flex flex-col items-center justify-center max-w-inherit min-h-inherit min-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col gap-6 items-center justify-center leading-[0] max-w-inherit min-h-inherit min-w-inherit p-[17px] relative text-center w-full">
          <div className="flex flex-col font-['Saira_Condensed:Light',_sans-serif] justify-center not-italic relative shrink-0 text-[28.8px] text-violet-500 w-full">
            <p className="block leading-[28.8px]">03</p>
          </div>
          <div
            className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[#ffffff] text-[18.9px] w-full"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="block leading-[24.96px]">Escalabilidad e Impacto</p>
          </div>
          <div className="flex flex-col font-['Saira_Condensed:Light',_sans-serif] h-24 justify-center leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.7)] w-full">
            <p className="block mb-0">{`Desarrollamos modelos de negocio sostenibles `}</p>
            <p className="block mb-0">{`con impacto real, medible y escalable `}</p>
            <p className="block">que generen valor a largo plazo.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CardsInnovacion() {
  return (
    <div
      className="[flex-flow:wrap] box-border content-center flex gap-[30px] items-center justify-center p-0 relative shrink-0 w-full"
      data-name="Cards Innovacion"
    >
      <Card01 />
      <Card02 />
      <Card03 />
    </div>
  );
}

function Innovacion() {
  return (
    <div className="relative shrink-0 w-full" data-name="Innovacion">
      <div className="flex flex-col items-center justify-end relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[74px] items-center justify-end px-[150px] py-12 relative w-full">
          <Heading10 />
          <div
            className="blur-[0.25px] filter h-0.5 rounded-[1px] shadow-[0px_0px_20px_0px_rgba(139,92,246,0.8),0px_0px_40px_0px_rgba(139,92,246,0.4)] shrink-0 w-[655.22px]"
            data-name="Horizontal Divider"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(139, 92, 246, 0) 0%, rgb(139, 92, 246) 20%, rgb(217, 70, 239) 50%, rgb(139, 92, 246) 80%, rgba(139, 92, 246, 0) 100%)",
            }}
          />
          <CardsInnovacion />
        </div>
      </div>
    </div>
  );
}

function Heading11() {
  return (
    <div
      className="box-border content-stretch flex flex-col font-['Saira_Condensed:Light',_sans-serif] items-center justify-center leading-[0] not-italic pt-0 px-0 relative shrink-0 text-center text-nowrap w-full"
      data-name="Heading 2"
      style={{ paddingBottom: "5.68434e-14px" }}
    >
      <div
        className="[text-shadow:rgba(0,0,0,0.3)_0px_2px_4px] flex flex-col justify-center relative shrink-0 text-[#ffffff] text-[48px] tracking-[-0.96px]"
        style={{ marginBottom: "-5.68434e-14px" }}
      >
        <p className="leading-[57.6px] text-nowrap whitespace-pre">
          <span>{`Nuestros `}</span>
          <span className="font-['Saira_Condensed:Light',_sans-serif] not-italic text-[#6f26ff]">
            Proyectos
          </span>
          <span className="adjustLetterSpacing">&nbsp;</span>
        </p>
      </div>
      <div
        className="flex flex-col justify-center relative shrink-0 text-[20px] text-[rgba(255,255,255,0.8)]"
        style={{ marginBottom: "-5.68434e-14px" }}
      >
        <p className="block leading-[32px] text-nowrap whitespace-pre">
          Convertimos desafíos en Oportunidades.
        </p>
      </div>
    </div>
  );
}

function Boton() {
  return (
    <div
      className="absolute bg-[rgba(139,92,246,0.9)] box-border content-stretch flex flex-row items-center justify-center left-4 pb-[4.2px] pt-[3px] px-4 rounded-[20px] top-[19px] w-[103px]"
      data-name="Botón"
    >
      <div className="basis-0 flex flex-col font-['Saira_Condensed:Regular',_sans-serif] grow h-full justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#ffffff] text-[11.2px] text-center tracking-[0.5px] uppercase">
        <p className="block leading-[11.2px]">En Desarrollo</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div
      className="[background-size:100%_99.63%] bg-left bg-no-repeat h-[180px] min-h-[180px] order-2 relative shrink-0 w-full"
      data-name="Background"
      style={{ backgroundImage: `url('${imgBackground}')` }}
    >
      <Boton />
    </div>
  );
}

function Container18() {
  return (
    <div className="order-1 relative shrink-0 w-full" data-name="Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start leading-[0] p-[24px] relative text-left w-full">
          <div
            className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center min-w-full relative shrink-0 text-[#ffffff] text-[20.8px] uppercase"
            style={{
              fontVariationSettings: "'wdth' 100",
              width: "min-content",
            }}
          >
            <p className="block leading-[27px]">HER CODE</p>
          </div>
          <div
            className="flex flex-col font-['Tomorrow:Medium',_sans-serif] justify-center min-w-full not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.8)] tracking-[-0.08px]"
            style={{ width: "min-content" }}
          >
            <p className="block leading-[19.2px]">
              La Catapulta Tecnológica Femenina
            </p>
          </div>
          <div className="flex flex-col font-['Saira_Condensed:Light',_sans-serif] justify-center not-italic relative shrink-0 text-[14.4px] text-[rgba(255,255,255,0.7)] text-nowrap">
            <p className="block leading-[21.6px] whitespace-pre">
              Gamificación + STEAM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Proyecto1() {
  return (
    <div
      className="basis-0 bg-[rgba(255,255,255,0.03)] grow max-w-[540px] min-h-[260px] min-w-[350px] relative rounded-xl shrink-0"
      data-name="Proyecto1"
    >
      <div className="flex flex-col justify-center max-w-inherit min-h-inherit min-w-inherit overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col-reverse items-start justify-center max-w-inherit min-h-inherit min-w-inherit p-px relative w-full">
          <Background />
          <Container18 />
        </div>
      </div>
      <div className="absolute border border-[rgba(139,92,246,0.25)] border-solid inset-0 pointer-events-none rounded-xl shadow-[0px_4px_20px_0px_rgba(139,92,246,0.15)]" />
    </div>
  );
}

function Overlay() {
  return (
    <div
      className="absolute bg-[rgba(139,92,246,0.9)] box-border content-stretch flex flex-row items-start justify-center left-4 pb-[4.2px] pt-[3px] px-4 rounded-[20px] top-[19px]"
      data-name="Overlay"
    >
      <div className="flex flex-col font-['Saira_Condensed:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[11.2px] text-center text-nowrap tracking-[0.5px] uppercase">
        <p className="adjustLetterSpacing block leading-[11.2px] whitespace-pre">
          En Desarrollo
        </p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div
      className="[background-size:100%_99.63%] bg-left bg-no-repeat h-[180px] min-h-[180px] order-2 relative shrink-0 w-full"
      data-name="Background"
      style={{ backgroundImage: `url('${imgBackground1}')` }}
    >
      <Overlay />
    </div>
  );
}

function Container19() {
  return (
    <div className="order-1 relative shrink-0 w-full" data-name="Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start leading-[0] p-[24px] relative text-left w-full">
          <div
            className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center min-w-full relative shrink-0 text-[#ffffff] text-[20.8px] uppercase"
            style={{
              fontVariationSettings: "'wdth' 100",
              width: "min-content",
            }}
          >
            <p className="block leading-[27px]">DE FEMME</p>
          </div>
          <div
            className="flex flex-col font-['Tomorrow:Medium',_sans-serif] justify-center min-w-full not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.8)] tracking-[-0.08px]"
            style={{ width: "min-content" }}
          >
            <p className="block leading-[19.2px]">
              La Revolución del Bienestar Femenino
            </p>
          </div>
          <div className="flex flex-col font-['Saira_Condensed:Light',_sans-serif] justify-center not-italic relative shrink-0 text-[14.4px] text-[rgba(255,255,255,0.7)] text-nowrap">
            <p className="block leading-[21.6px] whitespace-pre">
              IA + Autocuidado + Autodefensa
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Proyecto2() {
  return (
    <div
      className="basis-0 bg-[rgba(255,255,255,0.03)] grow max-w-[540px] min-h-[260px] min-w-[350px] relative rounded-xl shrink-0"
      data-name="Proyecto2"
    >
      <div className="flex flex-col justify-center max-w-inherit min-h-inherit min-w-inherit overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col-reverse items-start justify-center max-w-inherit min-h-inherit min-w-inherit p-px relative w-full">
          <Background1 />
          <Container19 />
        </div>
      </div>
      <div className="absolute border border-[rgba(139,92,246,0.25)] border-solid inset-0 pointer-events-none rounded-xl shadow-[0px_4px_20px_0px_rgba(139,92,246,0.15)]" />
    </div>
  );
}

function CardsProyectos() {
  return (
    <div
      className="[flex-flow:wrap] box-border content-center flex gap-12 items-center justify-center max-w-[1320px] p-0 relative shrink-0 w-full"
      data-name="Cards Proyectos"
    >
      <Proyecto1 />
      <Proyecto2 />
    </div>
  );
}

function Proyectos() {
  return (
    <div className="relative shrink-0 w-full" data-name="Proyectos">
      <div className="flex flex-col items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[82px] items-center justify-center pb-[100px] pt-[60px] px-[220px] relative w-full">
          <Heading11 />
          <CardsProyectos />
        </div>
      </div>
    </div>
  );
}

function Heading12() {
  return (
    <div
      className="box-border content-stretch flex flex-col font-['Saira_Condensed:Light',_sans-serif] items-center justify-center leading-[0] not-italic pt-0 px-0 relative shrink-0 text-center text-nowrap w-full"
      data-name="Heading 2"
      style={{ paddingBottom: "5.68434e-14px" }}
    >
      <div
        className="[text-shadow:rgba(0,0,0,0.3)_0px_2px_4px] flex flex-col justify-center relative shrink-0 text-[#ffffff] text-[48px] tracking-[-0.96px]"
        style={{ marginBottom: "-5.68434e-14px" }}
      >
        <p className="leading-[57.6px] text-nowrap whitespace-pre">
          <span>{`Colabora con `}</span>
          <span className="font-['Saira_Condensed:Light',_sans-serif] not-italic text-[#6f26ff]">
            Nosotros
          </span>
          <span className="adjustLetterSpacing">&nbsp;</span>
        </p>
      </div>
      <div
        className="flex flex-col justify-center relative shrink-0 text-[20px] text-[rgba(255,255,255,0.8)]"
        style={{ marginBottom: "-5.68434e-14px" }}
      >
        <p className="block leading-[32px] text-nowrap whitespace-pre">
          Construye el futuro con IN RESET
        </p>
      </div>
    </div>
  );
}

function Component01() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-1 grow items-start justify-start leading-[0] min-h-px min-w-px p-0 relative shrink-0 text-left w-full"
      data-name="01"
    >
      <div className="flex flex-col font-['Saira_Condensed:Light',_sans-serif] justify-center not-italic relative shrink-0 text-[25.6px] text-violet-500 w-full">
        <p className="block leading-[25.6px]">01</p>
      </div>
      <div
        className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[#ffffff] text-[17.6px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[22.88px]">{`Empresas & Marcas`}</p>
      </div>
      <div className="flex flex-col font-['Saira_Condensed:Light',_sans-serif] justify-center leading-[22.4px] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.7)] w-full">
        <p className="block mb-0">
          Accede a audiencias altamente segmentadas y
        </p>
        <p className="block">comprometidas</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-end min-h-px min-w-px p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div
        className="bg-gradient-to-r from-[#8b5cf600] h-px rounded-[1px] shrink-0 to-[#8b5cf600] via-50% via-[#8b5cf6] w-full"
        data-name="Horizontal Divider"
      />
      <div className="flex flex-col font-['Saira_Condensed:Light',_sans-serif] justify-center leading-[17.92px] not-italic relative shrink-0 text-[12.8px] text-[rgba(255,255,255,0.7)] text-left w-full">
        <p className="block mb-0">
          Genera conexiones auténticas que impulsan resultados
        </p>
        <p className="block">medibles.</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-center justify-center px-4 py-[15px] relative size-full">
          <Component01 />
          <Container20 />
        </div>
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div
      className="bg-[rgba(255,255,255,0.03)] h-[304px] max-w-[300px] min-h-[280px] min-w-[200px] relative rounded-xl shrink-0 w-[280.25px]"
      data-name="Card1"
    >
      <div className="box-border content-stretch flex flex-col h-[304px] items-center justify-center max-w-inherit min-h-inherit min-w-inherit overflow-clip p-px relative w-[280.25px]">
        <div
          className="[background-size:auto,_304px_304px] absolute bg-repeat bg-top-left bottom-[0.357%] left-[0.327%] opacity-20 right-[0.327%] top-[0.357%]"
          data-name="Gradient+Image"
          style={{
            backgroundImage: `linear-gradient(130.149deg, rgba(0, 0, 0, 0.7) 0%, rgba(139, 92, 246, 0.1) 100%), url('${imgGradientImage}')`,
          }}
        />
        <Container21 />
      </div>
      <div className="absolute border border-[rgba(139,92,246,0.25)] border-solid inset-0 pointer-events-none rounded-xl shadow-[0px_4px_20px_0px_rgba(139,92,246,0.15)]" />
    </div>
  );
}

function Component13() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-1 grow items-start justify-start leading-[0] min-h-px min-w-px p-0 relative shrink-0 text-left w-full"
      data-name="01"
    >
      <div className="flex flex-col font-['Saira_Condensed:Light',_sans-serif] justify-center not-italic relative shrink-0 text-[25.6px] text-violet-500 w-full">
        <p className="block leading-[25.6px]">02</p>
      </div>
      <div
        className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[#ffffff] text-[17.6px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[22.88px]">Inversores</p>
      </div>
      <div className="flex flex-col font-['Saira_Condensed:Light',_sans-serif] justify-center not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.7)] w-full">
        <p className="block leading-[22.4px]">
          Únete al crecimiento de mercados emergentes con alta demanda
        </p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-end min-h-px min-w-px p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div
        className="bg-gradient-to-r from-[#8b5cf600] h-px rounded-[1px] shrink-0 to-[#8b5cf600] via-50% via-[#8b5cf6] w-full"
        data-name="Horizontal Divider"
      />
      <div className="flex flex-col font-['Saira_Condensed:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12.8px] text-[rgba(255,255,255,0.7)] text-left w-full">
        <p className="block leading-[17.92px]">
          Oportunidad real en tecnología educativa y de bienestar con potencial
          escalable.
        </p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-center justify-center px-4 py-[15px] relative size-full">
          <Component13 />
          <Container22 />
        </div>
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div
      className="bg-[rgba(255,255,255,0.03)] h-[304px] max-w-[300px] min-h-[280px] min-w-[200px] relative rounded-xl shrink-0 w-[280.25px]"
      data-name="Card2"
    >
      <div className="box-border content-stretch flex flex-col h-[304px] items-start justify-center max-w-inherit min-h-inherit min-w-inherit overflow-clip p-px relative w-[280.25px]">
        <div
          className="[background-size:auto,_304px_304px] absolute bg-repeat bg-top-left bottom-[0.357%] left-[0.327%] opacity-20 right-[0.327%] top-[0.357%]"
          data-name="Gradient+Image"
          style={{
            backgroundImage: `linear-gradient(130.149deg, rgba(0, 0, 0, 0.7) 0%, rgba(139, 92, 246, 0.1) 100%), url('${imgGradientImage1}')`,
          }}
        />
        <Container23 />
      </div>
      <div className="absolute border border-[rgba(139,92,246,0.25)] border-solid inset-0 pointer-events-none rounded-xl shadow-[0px_4px_20px_0px_rgba(139,92,246,0.15)]" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[33px] items-center justify-start p-0 relative shrink-0">
      <Card1 />
      <Card2 />
    </div>
  );
}

function Component14() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-1 grow items-start justify-start leading-[0] min-h-px min-w-px p-0 relative shrink-0 text-left w-full"
      data-name="01"
    >
      <div className="flex flex-col font-['Saira_Condensed:Light',_sans-serif] justify-center not-italic relative shrink-0 text-[25.6px] text-violet-500 w-full">
        <p className="block leading-[25.6px]">03</p>
      </div>
      <div
        className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[#ffffff] text-[17.6px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[22.88px]">Patrocinadores</p>
      </div>
      <div className="flex flex-col font-['Saira_Condensed:Light',_sans-serif] justify-center not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.7)] w-full">
        <p className="block leading-[22.4px]">
          Posicionamiento estratégico en mercados emergentes
        </p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-end min-h-px min-w-px p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div
        className="bg-gradient-to-r from-[#8b5cf600] h-px rounded-[1px] shrink-0 to-[#8b5cf600] via-50% via-[#8b5cf6] w-full"
        data-name="Horizontal Divider"
      />
      <div className="flex flex-col font-['Saira_Condensed:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12.8px] text-[rgba(255,255,255,0.7)] text-left w-full">
        <p className="block leading-[17.92px]">
          Visibilidad premium en experiencias que generan comunidad y
          fidelización.
        </p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-center justify-center px-4 py-[15px] relative size-full">
          <Component14 />
          <Container24 />
        </div>
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div
      className="bg-[rgba(255,255,255,0.03)] h-[304px] max-w-[300px] min-h-[280px] min-w-[200px] relative rounded-xl shrink-0 w-[280.25px]"
      data-name="Card3"
    >
      <div className="box-border content-stretch flex flex-col h-[304px] items-start justify-center max-w-inherit min-h-inherit min-w-inherit overflow-clip p-px relative w-[280.25px]">
        <div
          className="[background-size:auto,_304px_304px] absolute bg-repeat bg-top-left bottom-[0.357%] left-[0.327%] opacity-20 right-[0.327%] top-[0.357%]"
          data-name="Gradient+Image"
          style={{
            backgroundImage: `linear-gradient(130.149deg, rgba(0, 0, 0, 0.7) 0%, rgba(139, 92, 246, 0.1) 100%), url('${imgGradientImage2}')`,
          }}
        />
        <Container25 />
      </div>
      <div className="absolute border border-[rgba(139,92,246,0.25)] border-solid inset-0 pointer-events-none rounded-xl shadow-[0px_4px_20px_0px_rgba(139,92,246,0.15)]" />
    </div>
  );
}

function Component15() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-1 grow items-start justify-start leading-[0] min-h-px min-w-px p-0 relative shrink-0 text-left w-full"
      data-name="01"
    >
      <div className="flex flex-col font-['Saira_Condensed:Light',_sans-serif] justify-center not-italic relative shrink-0 text-[25.6px] text-violet-500 w-full">
        <p className="block leading-[25.6px]">04</p>
      </div>
      <div
        className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[#ffffff] text-[17.6px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[22.88px]">Co-Creación</p>
      </div>
      <div className="flex flex-col font-['Saira_Condensed:Light',_sans-serif] justify-center not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.7)] w-full">
        <p className="block leading-[22.4px]">
          Imagina crear la próxima revolución tecnológica juntos
        </p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-end min-h-px min-w-px p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div
        className="bg-gradient-to-r from-[#8b5cf600] h-px rounded-[1px] shrink-0 to-[#8b5cf600] via-50% via-[#8b5cf6] w-full"
        data-name="Horizontal Divider"
      />
      <div className="flex flex-col font-['Saira_Condensed:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12.8px] text-[rgba(255,255,255,0.7)] text-left w-full">
        <p className="block leading-[17.92px]">
          Desarrollamos productos que no existen pero que el mundo necesita.
        </p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div
      className="basis-0 grow max-w-[300px] min-h-px min-w-[200px] relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col items-center justify-center max-w-inherit min-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-center justify-center max-w-inherit min-w-inherit px-4 py-[15px] relative size-full">
          <Component15 />
          <Container26 />
        </div>
      </div>
    </div>
  );
}

function Card4() {
  return (
    <div
      className="bg-[rgba(255,255,255,0.03)] h-[304px] max-w-[300px] min-h-[280px] min-w-[200px] relative rounded-xl shrink-0 w-[280.25px]"
      data-name="Card4"
    >
      <div className="box-border content-stretch flex flex-col h-[304px] items-start justify-center max-w-inherit min-h-inherit min-w-inherit overflow-clip p-px relative w-[280.25px]">
        <div
          className="[background-size:auto,_304px_304px] absolute bg-repeat bg-top-left bottom-[0.357%] left-[0.327%] opacity-20 right-[0.327%] top-[0.357%]"
          data-name="Gradient+Image"
          style={{
            backgroundImage: `linear-gradient(130.149deg, rgba(0, 0, 0, 0.7) 0%, rgba(139, 92, 246, 0.1) 100%), url('${imgGradientImage3}')`,
          }}
        />
        <Container27 />
      </div>
      <div className="absolute border border-[rgba(139,92,246,0.25)] border-solid inset-0 pointer-events-none rounded-xl shadow-[0px_4px_20px_0px_rgba(139,92,246,0.15)]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[33px] items-center justify-start p-0 relative shrink-0">
      <Card3 />
      <Card4 />
    </div>
  );
}

function CardsColabora() {
  return (
    <div
      className="[flex-flow:wrap] box-border content-center flex gap-[33px] items-center justify-center p-0 relative shrink-0 w-full"
      data-name="CardsColabora"
    >
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Heading3() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start leading-[0] p-0 relative shrink-0 text-center w-full"
      data-name="Heading 3"
    >
      <div
        className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center min-w-full relative shrink-0 text-[#ffffff] text-[22.4px]"
        style={{ fontVariationSettings: "'wdth' 100", width: "min-content" }}
      >
        <p className="block leading-[26.88px]">Únete a la revolución</p>
      </div>
      <div className="flex flex-col font-['Saira_Condensed:Light',_sans-serif] justify-center not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.8)] text-nowrap">
        <p className="block leading-[24px] whitespace-pre">
          Forma parte de nuestra red de colaboradores.
        </p>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div
      className="absolute size-[18px] translate-x-[-50%] translate-y-[-50%]"
      data-name="Component 2"
      style={{ top: "calc(50% - 0.00500011px)", left: "calc(50% - 39.56px)" }}
    >
      <div className="absolute bottom-0 left-0 right-0 top-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 18 18"
        >
          <g id="Component 2">
            <path
              d={svgPaths.p10902880}
              fill="var(--fill-0, #25D366)"
              id="Vector"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div
      className="bg-[rgba(255,255,255,0)] h-[41.61px] min-w-40 relative rounded-[10px] shrink-0 w-40"
      data-name="Button"
    >
      <div className="absolute border-2 border-[#25d366] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_2px_8px_0px_rgba(37,211,102,0.2)]" />
      <Component2 />
      <div
        className="absolute flex flex-col font-['Roboto:Bold',_sans-serif] font-bold h-[22px] justify-center leading-[0] text-[#25d366] text-[14.4px] text-center translate-x-[-50%] translate-y-[-50%] w-[71.31px]"
        style={{
          top: "calc(50% - 0.805px)",
          left: "calc(50% + 13.095px)",
          fontVariationSettings: "'wdth' 100",
        }}
      >
        <p className="block leading-[21.6px]">WhatsApp</p>
      </div>
    </div>
  );
}

function Component16() {
  return (
    <div
      className="absolute size-[18px] translate-x-[-50%] translate-y-[-50%]"
      data-name="Component 2"
      style={{ top: "calc(50% - 0.00500011px)", left: "calc(50% - 47px)" }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="Component 2">
          <path
            d={svgPaths.p34ffc480}
            fill="var(--fill-0, #8B5CF6)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div
      className="bg-[rgba(255,255,255,0)] h-[41.61px] min-w-40 relative rounded-[10px] shrink-0 w-[164px]"
      data-name="Button"
    >
      <div className="absolute border-2 border-solid border-violet-500 inset-0 pointer-events-none rounded-[10px] shadow-[0px_2px_8px_0px_rgba(139,92,246,0.2)]" />
      <Component16 />
      <div
        className="absolute flex flex-col font-['Roboto:Bold',_sans-serif] font-bold h-[22px] justify-center leading-[0] text-[14.4px] text-center text-violet-500 translate-x-[-50%] translate-y-[-50%] w-[86.2px]"
        style={{
          top: "calc(50% - 0.805px)",
          left: "calc(50% + 13.1px)",
          fontVariationSettings: "'wdth' 100",
        }}
      >
        <p className="block leading-[21.6px]">Enviar Email</p>
      </div>
    </div>
  );
}

function Botones() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-4 items-center justify-center pb-0 pt-2 px-0 relative shrink-0 w-full"
      data-name="Botones"
    >
      <Button />
      <Button1 />
    </div>
  );
}

function Unete() {
  return (
    <div
      className="bg-[rgba(255,255,255,0.03)] relative rounded-2xl shrink-0 w-full"
      data-name="Unete"
    >
      <div className="absolute border border-[rgba(139,92,246,0.25)] border-solid inset-0 pointer-events-none rounded-2xl shadow-[0px_4px_20px_0px_rgba(139,92,246,0.15)]" />
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-7 items-center justify-center p-[25px] relative w-full">
          <Heading3 />
          <Botones />
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-6 items-center justify-center max-w-[1320px] p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Heading12 />
      <CardsColabora />
      <Unete />
    </div>
  );
}

function Colabora() {
  return (
    <div className="relative shrink-0 w-full" data-name="Colabora">
      <div className="flex flex-col items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-[30px] py-12 relative w-full">
          <Container28 />
        </div>
      </div>
    </div>
  );
}

function Pages() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center p-0 relative shrink-0 w-full"
      data-name="Pages"
    >
      <Hero />
      <SobreNosotros />
      <Innovacion />
      <Proyectos />
      <Colabora />
    </div>
  );
}

function Heading13() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Heading 5"
    >
      <div className="flex flex-col font-['Tomorrow:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] text-left tracking-[-0.08px] w-full">
        <p className="block leading-[19.2px]">Soporte</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-px relative rounded-md shrink-0"
      data-name="Button"
    >
      <div className="flex flex-col font-['Saira_Condensed:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.5)] text-center text-nowrap">
        <p className="block leading-[24px] whitespace-pre">
          Política de Privacidad
        </p>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Item"
    >
      <Button2 />
    </div>
  );
}

function Button3() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-px relative rounded-md shrink-0"
      data-name="Button"
    >
      <div className="flex flex-col font-['Saira_Condensed:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.5)] text-center text-nowrap">
        <p className="block leading-[24px] whitespace-pre">
          Términos y Servicios
        </p>
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Item"
    >
      <Button3 />
    </div>
  );
}

function List1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="List"
    >
      <Item2 />
      <Item3 />
    </div>
  );
}

function Container29() {
  return (
    <div
      className="basis-0 grow max-w-[1320px] min-h-px min-w-px relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="max-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start max-w-inherit px-3 py-0 relative size-full">
          <Heading13 />
          <List1 />
        </div>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-center max-w-[1320px] pb-0 pt-6 px-0 relative self-stretch shrink-0 w-[330px]"
      data-name="Margin"
    >
      <Container29 />
    </div>
  );
}

function Heading14() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Heading 5"
    >
      <div className="flex flex-col font-['Tomorrow:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] text-left tracking-[-0.08px] w-full">
        <p className="block leading-[19.2px]">Contacto</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start px-0 py-[0.5px] relative shrink-0"
      data-name="Link"
    >
      <a
        className="[white-space-collapse:collapse] flex flex-col font-['Saira_Condensed:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.5)] text-left text-nowrap"
        href="mailto:soporte@in-reset.com"
      >
        <p className="block cursor-pointer leading-[24px] whitespace-pre">
          soporte@in-reset.com
        </p>
      </a>
    </div>
  );
}

function Item4() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pb-px pt-0 px-0 relative shrink-0 w-full"
      data-name="Item"
    >
      <Link3 />
    </div>
  );
}

function Link4() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start px-0 py-[0.5px] relative shrink-0"
      data-name="Link"
    >
      <a
        className="[white-space-collapse:collapse] flex flex-col font-['Saira_Condensed:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.5)] text-left text-nowrap"
        href="mailto:info@in-reset.com"
      >
        <p className="block cursor-pointer leading-[24px] whitespace-pre">
          info@in-reset.com
        </p>
      </a>
    </div>
  );
}

function Item5() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pb-px pt-0 px-0 relative shrink-0 w-full"
      data-name="Item"
    >
      <Link4 />
    </div>
  );
}

function List2() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[7px] items-start justify-start p-0 relative shrink-0 w-full"
      data-name="List"
    >
      <Item4 />
      <Item5 />
    </div>
  );
}

function Container30() {
  return (
    <div
      className="basis-0 grow max-w-[1320px] min-h-px min-w-px relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="max-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[15px] items-start justify-start max-w-inherit px-3 py-0 relative size-full">
          <Heading14 />
          <List2 />
        </div>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-center max-w-[1320px] pb-0 pt-6 px-0 relative self-stretch shrink-0 w-[330px]"
      data-name="Margin"
    >
      <Container30 />
    </div>
  );
}

function Container31() {
  return (
    <div
      className="[flex-flow:wrap] absolute box-border content-stretch flex gap-0 items-start justify-start left-0 p-0 right-0 top-0"
      data-name="Container"
    >
      <Margin />
      <Margin1 />
    </div>
  );
}

function Separator() {
  return (
    <div
      className="absolute h-px left-3 opacity-25 right-3 top-[151.19px]"
      data-name="Separator"
    >
      <div className="absolute border-[1px_0px_0px] border-[rgba(108,117,125,0.25)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container32() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start max-w-[1320px] px-3 py-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Saira_Condensed:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.5)] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">© IN RESET 2025</p>
      </div>
    </div>
  );
}

function Component17() {
  return (
    <div className="h-5 relative shrink-0 w-[17.5px]" data-name="Component 2">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 20"
      >
        <g id="Component 2">
          <path
            d={svgPaths.p1fd35c80}
            fill="var(--fill-0, white)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Link5() {
  return (
    <a
      className="box-border content-stretch flex flex-row items-start justify-start overflow-visible pb-[3px] pt-0.5 px-0 relative shrink-0"
      data-name="Link"
      href="https://www.linkedin.com/company/in-reset/"
    >
      <Component17 />
    </a>
  );
}

function Component18() {
  return (
    <div className="h-5 relative shrink-0 w-[17.5px]" data-name="Component 2">
      <div className="absolute bottom-0 left-[-0.017%] right-[-0.039%] top-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 18 20"
        >
          <g id="Component 2">
            <path
              d={svgPaths.p34f9c700}
              fill="var(--fill-0, white)"
              id="Vector"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <a
      className="box-border content-stretch flex flex-row items-start justify-start overflow-visible pb-[3px] pt-0.5 px-0 relative shrink-0"
      data-name="Link"
      href="https://www.instagram.com/in__reset"
    >
      <Component18 />
    </a>
  );
}

function Component19() {
  return (
    <div className="h-5 relative shrink-0 w-[17.5px]" data-name="Component 2">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 20"
      >
        <g id="Component 2">
          <path
            d={svgPaths.p14a4fe80}
            fill="var(--fill-0, white)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Link7() {
  return (
    <a
      className="box-border content-stretch flex flex-row items-start justify-start overflow-visible pb-[3px] pt-0.5 px-0 relative shrink-0"
      data-name="Link"
      href="https://www.tiktok.com/@in_reset"
    >
      <Component19 />
    </a>
  );
}

function Container33() {
  return (
    <div
      className="box-border content-stretch cursor-pointer flex flex-row gap-4 items-start justify-start max-w-[1320px] pb-px pt-0 px-3 relative shrink-0"
      data-name="Container"
    >
      <Link5 />
      <Link6 />
      <Link7 />
    </div>
  );
}

function Container34() {
  return (
    <div
      className="[flex-flow:wrap] absolute box-border content-center flex items-center justify-between left-0 p-0 right-0 top-[175.19px]"
      data-name="Container"
    >
      <Container32 />
      <Container33 />
    </div>
  );
}

function Container35() {
  return (
    <div
      className="h-[201.19px] max-w-[1320px] relative shrink-0 w-full"
      data-name="Container"
    >
      <Container31 />
      <Separator />
      <Container34 />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#000000] relative shrink-0 w-full" data-name="Footer">
      <div className="absolute border-[1px_0px_0px] border-[rgba(108,117,125,0.25)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center pb-12 pt-[25px] px-[30px] relative w-full">
          <Container35 />
        </div>
      </div>
    </div>
  );
}

export default function Desktop() {
  return (
    <div
      className="bg-[#000000] box-border content-stretch flex flex-col items-start justify-start p-0 relative size-full"
      data-name="Desktop"
    >
      <Nav />
      <Pages />
      <Footer />
    </div>
  );
}