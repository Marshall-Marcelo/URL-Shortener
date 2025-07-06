import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Desc from "../components/Desc";
import Button from "../components/Button";
import Input from "../components/Input";
import Card from "../components/Card";
import CardIcon from "../components/CardIcon";
import Footer from "../components/Footer";
import Result from "../components/Result";
import illustration from "../assets/illustration-working.svg";
import brand_recognition from "../assets/icon-brand-recognition.svg";
import detailed_records from "../assets/icon-detailed-records.svg";
import fully_customizable from "../assets/icon-fully-customizable.svg";

const MainLayout = () => {
  type UrlPair = {
    original: string;
    shortened: string;
  };
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const [urlInput, setUrlInput] = useState<string>("");
  const [buttonClicked, setButtonClicked] = useState<boolean>(false);
  const [urlValues, setUrlValues] = useState<UrlPair[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorInput, setErrorInput] = useState<boolean>(false);

  const handleClick = () => {
    if (urlInput === "" || emailRegex.test(urlInput)) {
      setErrorInput(true);
      setIsLoading(false);
      return;
    }

    setButtonClicked(true);
    setIsLoading(true);
  };

  useEffect(() => {
    if (!buttonClicked) return;

    fetch("https://cors-anywhere.herokuapp.com/https://cleanuri.com/api/v1/shorten", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: urlInput }),
    })
      .then((response) => response.json())
      .then((result) => {
        setUrlValues((prev) => [...prev, { original: urlInput, shortened: result.result_url }]);
        setUrlInput("");
        setButtonClicked(false);
        setErrorInput(false);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [buttonClicked]);

  return (
    <>
      <section className="p-6 md:px-20">
        <div className="flex flex-col gap-10 justify-center">
          <Navbar />
          <div className="flex flex-col items-center justify-between gap-2 md:flex-row-reverse md:items-start">
            <img className="md:w-2/5" src={illustration} alt="" />
            <div className="flex flex-col gap-4 items-center w-full md:w-1/2 md:items-start">
              <span className="text-3xl text-center md:text-[55px] md:text-start md:leading-tight font-bold">
                More than just shorter links
              </span>
              <Desc>Build your brand's recognition and get detailed insights on how your links are performing.</Desc>
              <Button className="w-3/5 md:w-fit">Get Started</Button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row bg-very_dark_blue p-6 gap-3 rounded-xl bg-shorten-mobile md:bg-shorten-desktop bg-no-repeat bg-right-top md:bg-left-bottom bg-contain md:bg-cover">
            <Input error={errorInput} value={urlInput} onChange={(e) => setUrlInput(e.target.value)} />
            <Button className="md:w-1/4" loading={isLoading} onClick={handleClick}>
              Shorten It!
            </Button>
          </div>
        </div>
      </section>
      <section className="p-6 pb-20 md:px-20 bg-slate-200 flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          {urlValues.length === 0 ? (
            <Title>Results Appear Here</Title>
          ) : (
            urlValues.map((value, index) => (
              <Result key={index} originalUrl={value.original} shortenedUrl={value.shortened} />
            ))
          )}
        </div>
        <div className="flex flex-col gap-2 mb-5 md:items-center">
          <Title>Advanced Statistics</Title>
          <Desc>Track how your links are performing across the web with our advanced statistics dashboard</Desc>
        </div>
        <div className="flex flex-col gap-20 md:flex-row">
          <Card>
            <CardIcon imagePath={brand_recognition} />
            <Title>Brand Recognition</Title>
            <Desc>
              Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil
              confidence in your content
            </Desc>
          </Card>
          <Card>
            <CardIcon imagePath={detailed_records} />
            <Title>Detailed Records</Title>
            <Desc>
              Gain insights into who is clicking your links. Knowing when and where people engage with your content
              helps inform better decisions
            </Desc>
          </Card>
          <Card>
            <CardIcon imagePath={fully_customizable} />
            <Title>Fully Customizable</Title>
            <Desc>
              Improve brand awareness and content discoverability through customizable links, supercharging audience
              engagement.
            </Desc>
          </Card>
        </div>
      </section>
      <div className="flex flex-col justify-center items-center gap-3 p-4 h-[200px] bg-very_dark_blue bg-boost-mobile md:bg-boost-desktop bg-no-repeat bg-right-bottom bg-contain md:bg-cover">
        <Title className="text-white">Boost your links today</Title>
        <Button className="w-fit">Get Started</Button>
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
