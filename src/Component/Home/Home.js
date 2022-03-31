import { useEffect } from 'react';


let alldata = "";


const Quotes = async () => {


    const api = "https://type.fit/api/quotes";
    try {
        let dat = await fetch(api);
        alldata = await dat.json();
        Newquotes();


    } catch (err) {
        console.log(err);
    }
};

const Newquotes = () => {
    const text = document.getElementById("text");
    const author = document.getElementById("author");
    const rand = Math.floor(Math.random() * 10);
    text.innerText = alldata[rand].text;
    author.innerText = alldata[rand].author;


};


function Home() {
    useEffect(() => {

        Quotes();
    })


    return (
        
        <>
        <h1 className="font-serif text-white text-5xl grid grid-cols-1 pt-24 ">Quotes Fething From Cloud With API</h1>
            <div
                className=" bg-blue-400 text-white   flex flex-col justify-items-center justify-center mt-10  "
            >
                <h3 className="text-left text-2xl font-mono font-bold">Quotes :</h3>
                <pre>  </pre>
                <p id="text" className="text-left text-2xl font-mono"></p>
                <br></br>
                <br></br>
                <br></br>
                <h3 className="text-right text-2xl font-mono">Author :</h3>
                <pre>  </pre>
                <p id="author" className="text-right text-2xl font-mono"></p>
                <pre>       </pre>
                
            </div>
            <br></br>
            <br></br>
            <div className='pb-28'>
            <button id="newquest" onClick={Newquotes} className="font-mono bg-slate-500 text-white rounded-md h-12 w-72">Fetch Next Quote From LIVE API</button>

            </div>
            </>
       

    )

}


export default Home;
