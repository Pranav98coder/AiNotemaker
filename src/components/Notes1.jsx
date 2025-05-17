//import { GoogleGenAI } from "@google/genai";
import { useState } from "react";
import axios from 'axios';



const Ai=()=>{
    const [question,setQuestion]=useState("Explain how AI works?");
    const [text,setText]=useState("");
    const ApiKey=import.meta.env.VITE_API_KEY_GEMINI;
    const [loading,setLoading]=useState(false);
    
    

    async function prompt(){
        
    
        setLoading(true);
        console.log(question);
        console.log("loading...");

        //console.log(ApiKey);
       
    
        const response=await axios({
            method:"POST",
            url:`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${ApiKey}`,
            data:
            {
            "contents": [{
                "parts":[{"text": `${question}`}]
                }]
            },
           
        })
        const info=response?.data?.candidates[0]?.content?.parts[0]?.text;
        
        console.log(response["data"]["candidates"][0]["content"]["parts"][0]["text"]);
        setText(info);
        setLoading(false);

    }
    return(
        <div>
           
        
            <div>
                <p className="text-centre">Please type your question here:</p>
                <br/>
                <textarea className="w-full bg-gray-700 text-[#cccac6] p-2 rounded-md outline-none mb-2" value={question} onChange={(e)=>setQuestion(e.target.value)}></textarea>  
                <br></br>
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={prompt}>Generate</button>
                {!loading && <p>{text}</p>}
                <br/>
                 {loading && <h1>LOADING...</h1>}
                
            </div>    
            
        </div>
    )

}
    
//  const Ai = () => {
//   const ai = new GoogleGenAI({ apiKey:import.meta.env.VIT_API_KEY_GEMINI  });
//   const {content,setContent} = useState("Explain how AI works in a few words");

//   async function main() {
//     const response = await ai.models.generateContent({
//       model: "gemini-2.0-flash",
//       contents: `${content}`,
//     });
//   console.log(response.text);
//   }

//   main();
//   return(
//     <div>
//       <h1>AI Note Maker</h1>
//       <textarea value={content} onChange={(e)=>setContent(e.target.value)}></textarea>
//       <button onClick={main}>Generate</button>
//       <p>{response.text}</p>
//     </div>
//   )
// }
 export default Ai;
