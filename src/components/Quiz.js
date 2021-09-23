import React, { useState } from 'react';
import logo from '../assets/VichyLogo.png'
import background1 from  "../assets/BG_VICHY01_10.jpg";
import background2 from  "../assets/BG_VICHY02_05.jpg";
import background3 from  "../assets/BG_VICHY03_06.jpg";
import incorrecto from  "../assets/INCORRECTO.png";
import correcto from  "../assets/CORRECTO.png";
import '../style/quiz.css'
import Form from './Form';
import {useSpring, animated} from 'react-spring'



const Quiz=()=> {
	const questions = [
		{
			questionText: '¿Qué porcentaje de vitamina C contienen las ampollas de peptide-c?',
			answerOptions: [
				{ answerText: '8%', isCorrect: true, btn: "answerButton1", id:1},
				{ answerText: '10%', isCorrect: false, btn: "answerButton1", id:2 },
				{ answerText: '5%', isCorrect: false, btn: "answerButton1", id:3},
				{ answerText: '2.5%', isCorrect: false, btn: "answerButton1", id:4},
				{class: "answerButton2", id:5 }
			],
            img: background1, 
			img2: "backM1",
			class: "btns1", 
		},
		{
			questionText: '¿La vitamina C mancha?',
			answerOptions: [
				{ answerText: 'Verdadero', isCorrect: false, btn: "answerButton2", id:6 },
				{ answerText: 'Falso', isCorrect: true,btn: "answerButton2", id:7 },
				{class: "answerButton2", id:8 }
			],
            img: background2, 
			img2: "backM2",
			class:"btns2"
		},
		{
			questionText: '¿Las ampollas de peptide-c se usan solo de día?',
			answerOptions: [
				{ answerText: 'Verdadero', isCorrect: false, btn: "answerButton3", id:9 },
				{ answerText: 'Falso', isCorrect: true, btn: "answerButton3", id:10 },
				{class: "answerButton3", id:11 }
			],
            img: background3, 
			img2: "backM3", 
			class:"btns3"
		},
	];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
	const [showScore, setShowScore] = useState(false);
    const [showImg, setShowImg] = useState(null);

	const handleAnswer=(isCorrect)=>{
		if(isCorrect ){
			setScore (score + 40)
			setShowImg(isCorrect)
		}else{
			setShowImg(isCorrect)
		}
	}
	
	const nextQuestion=()=>{
		const nextQ = currentQuestion + 1 
		if ( nextQ < questions.length){
			setCurrentQuestion(nextQ)
			setShowImg(null)
		}else {
			setShowScore(true);
		}

	}
	let styleback = {
        backgroundImage: "url(" +
        ` ${questions[currentQuestion].img} `
         + ")",
         backgroundColor: "white",
		 backgroundPosition: "center center",
		 backgroundSize: "cover",
		 backgroundRepeat: "no-repeat",
		 '@media (minWidth: 678px)': {
			backgroundImage: "url(" +
			` ${questions[currentQuestion].img} `
			 + ")",
		},
    }
	const stylesBtn = useSpring({
        loop: true,
        to: [
		  {color: "#000000"},
          {  color: "#ffffff" },

        ],
        from: { color: "#ffffff" },
		config: { duration: 500 },
		delay: 100
      })

	  const animationW = useSpring({
		from: {opacity: 0, transition: "2s"},
		to:{opacity: 1, transition: "2s" },   
	})

	return (
		<div className=''>
			{ showScore ? (
			  <div className='score-section'>
				<Form prop= {score}>  </Form>					
			  </div>
			):(
			<div className= "containerQuiz" >
			<div className={questions[currentQuestion].img2}  style={styleback}>
				<div className="containerQuiz2">
					<div className="containerQuizz3">
				    <div>
                      <img src={logo} alt="logo" className="logoHome"/>
				      <div>
					   <h1> {questions[currentQuestion].questionText} </h1>
				       </div>
				    </div>
					<animated.div style={animationW} className={questions[currentQuestion].class}>
				{questions[currentQuestion].answerOptions.map(e=>(

					<button className={e.btn} key={e.id} onClick={()=>handleAnswer(e.isCorrect)} > {e.answerText} </button>

				))}
				</animated.div>
				<div  className="answers">
                   {showImg === true &&(
					<>
						 <img src={correcto} alt="correcto"></img>
					     <animated.button style={stylesBtn} 
						 className="btn-next" 
						 onClick={nextQuestion} >Continuar</animated.button>	
					</>
				   )}
				     {showImg === false &&(
				        <>
							<img src={incorrecto} alt="incorrecto"></img>
							<animated.button style={stylesBtn} 
							className="btn-next" 
							onClick={nextQuestion}>Continuar</animated.button >	
						</>
				   )}
				   
				</div>
				</div>
				</div>
			</div>
			</div>
			)}
		</div>
	);
}

export default Quiz;