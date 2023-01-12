import Head from "next/head";
import Image from "next/image";

const Home = () => {
  const [reasonInput, setReasonInput] = useState("");
  const [personInput, setPersonInput] = useState("");
  const [apiOutput, setApioutput] = useState("");
  const [isGenerating, setisGenerating] = useState(false);

  callGenerateEndpoint = async () => {
    setisGenerating(true);
    console.log("Chaki Se DM aa raha he......");
    const res = await fetch("api/write", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ personInput, reasonInput }),
    });
    const data = await res.json();
    const { output } = data;
    console.log("Chaki Se DM Aagaya", output.text);
    setApioutput(`${output.text}`);
    setisGenerating(false);
  };

  const OnChangedReason = (e) => {
    setReasonInput(e.target.value);
  };

  const OnChangedPerson = (e) => {
    setReasonInput(e.target.value);
  };

  return (
    <div className="root">
      <Head>
        <title>LinkldinDMWriter - ChakiChaki</title>
      </Head>
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>chaki chaki dm nikal</h1>
          </div>
          <div className="header-subtitle">
            <h2>generate your custom cold email from chaki!</h2>
          </div>
        </div>
        <div className="prompt-container">
          <textarea
            className="prompt-box"
            placeholder="Elon Musk, Founder of Spacex,tesla."
            value={personInput}
            onChange={OnChangedPerson}
            style={{ height: 30 }}
          />
          <textarea
            className="prompt-box"
            placeholder="tell thme about my new edtech startup which will make student so much powerful that evry user of 
            that startup will make another startup"
            value={reasonInput}
            onChange={OnChangedReason}
          />
          <div className="prompt-box">
            <a
              className={
                isGenerating ? "generate-button loading" : "generate-button"
              }
              onClick={callGenerateEndpoint}
            >
              <div className="generate">
                {isGenerating ? (
                  <span class="loader"></span>
                ) : (
                  <p>ChakiChaki DM Nikalo</p>
                )}
              </div>
            </a>
          </div>

          <div className="output">
            <div className="output-header-container">
              <div className="output-header">
                <h3>Output</h3>
                <h5>Chaki Ne Dm nikal dia</h5>
              </div>
            </div>
            <div className="output-content">
              <p>{apiOutput}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
