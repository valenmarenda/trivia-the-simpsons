import React, { useState } from 'react';
import background1 from  "../assets/bg1.png";
import background2 from  "../assets/bg2.png";
import background3 from  "../assets/bg3.png";
import background4 from  "../assets/bg4.png";
import background5 from  "../assets/bg5.png";
import background6 from  "../assets/bg6.png";
import background7 from  "../assets/bg7.png";
import '../style/quiz.css'
import Form from './Form';
import {useSpring, animated} from 'react-spring'
import Logo from './Logo';



const Quiz=()=> {
	const questions = [
		{
			questionText: '¿Cuál fue el primero de Los Beatles que participó como estrella invitada en la serie?',
			answerOptions: [
				{ answerText: 'George Harrison', isCorrect: false, btn: "answerButton1", id:1},
				{ answerText: "Ringo starr", isCorrect: true, btn: "answerButton1", id:2 },
				{ answerText: "John Lennon", isCorrect: false, btn: "answerButton1", id:3},
				{ answerText: "Paul Mac Arney", isCorrect: false, btn: "answerButton1", id:4},
				{class: "answerButton2", id:5 }
			],
            img: background1, 
			img2: "backM1",
			class: "btns1", 
		},
		{
			questionText: '¿Qué alimento potencialmente venenoso consume Homero en el restaurant de sushi?',
			answerOptions: [
				{ answerText: 'Meduza', isCorrect: false, btn: "answerButton1", id:1},
				{ answerText: "Pez globo", isCorrect: true, btn: "answerButton1", id:2 },
				{ answerText: "Erizo", isCorrect: false, btn: "answerButton1", id:3},
				{ answerText: "Cangrejo", isCorrect: false, btn: "answerButton1", id:4},
				{class: "answerButton2", id:5 }
			],
            img: background2, 
			img2: "backM2",
			class: "btns1", 
		},
		{
			questionText: '¿Cómo se llama la niñera ladrona que aparece en el capítulo “Una Noche Encantadora”?',
			answerOptions: [
				{ answerText: 'Sra. Botz', isCorrect: true, btn: "answerButton1", id:1},
				{ answerText: "Sra. Waine", isCorrect: false, btn: "answerButton1", id:2 },
				{ answerText: "Sra. Rose", isCorrect: false, btn: "answerButton1", id:3},
				{ answerText: "Sra. Lion", isCorrect: false, btn: "answerButton1", id:4},
				{class: "answerButton2", id:5 }
			],
            img: background3, 
			img2: "backM3",
			class: "btns1", 
		},
		{
			questionText: '¿Cuál es la canción que Luan tenía grabada en un casette y ocupa para reconquistar a su esposa?',
			answerOptions: [
				{ answerText: 'Hasta que te conocí', isCorrect: false, btn: "answerButton1", id:1},
				{ answerText: "Experiencia religiosa", isCorrect: true, btn: "answerButton1", id:2 },
				{ answerText: "Por debajo de la mesa", isCorrect: false, btn: "answerButton1", id:3},
				{ answerText: "Historia de un amor", isCorrect: false, btn: "answerButton1", id:4},
				{class: "answerButton2", id:5 }
			],
            img: background4, 
			img2: "backM2",
			class: "btns1", 
		},
		{
			questionText: '¿Cuántos gatos Lisa ha llamado Bola de Nieve?',
			answerOptions: [
				{ answerText: '3', isCorrect: false, btn: "answerButton1", id:1},
				{ answerText: "4", isCorrect: true, btn: "answerButton1", id:2 },
				{ answerText: "6", isCorrect: false, btn: "answerButton1", id:3},
				{ answerText: "5", isCorrect: false, btn: "answerButton1", id:4},
				{class: "answerButton2", id:5 }
			],
            img: background5, 
			img2: "backM2",
			class: "btns1", 
		},
		{
			questionText: '¿Cuál es el nombre real de Bob Patiño?',
			answerOptions: [
				{ answerText: 'Gilberto Zaragoza Arstía', isCorrect: false, btn: "answerButton1", id:1},
				{ answerText: "Alberto Sepúlveda Echverría", isCorrect: false, btn: "answerButton1", id:2 },
				{ answerText: "Roberto Zabaleta Archundia", isCorrect: true, btn: "answerButton1", id:3},
				{ answerText: "Robertino Gomez Zabaleta", isCorrect: false, btn: "answerButton1", id:4},
				{class: "answerButton2", id:5 }
			],
            img: background6, 
			img2: "backM2",
			class: "btns1", 
		},
		{
			questionText: '¿En qué adaptación musical de una obra muy famosa fue en la que participó Marge?',
			answerOptions: [
				{ answerText: '27 vagones de algodon', isCorrect: false, btn: "answerButton1", id:1},
				{ answerText: "Un tranvía llamado deseo", isCorrect: true, btn: "answerButton1", id:2 },
				{ answerText: "El zoo de cristal", isCorrect: false, btn: "answerButton1", id:3},
				{ answerText: "Amor para siempre", isCorrect: false, btn: "answerButton1", id:4},
				{class: "answerButton2", id:5 }
			],
            img: background7, 
			img2: "backM2",
			class: "btns1", 
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
		<div className='' >
			{ showScore ? (
			  <div className='score-section'>
				<Form prop= {score}>  </Form>					
			  </div>
			):(
			<div className= "containerQuiz" >
			<div className={questions[currentQuestion].img2}  style={styleback}>
				<div className="containerQuiz2">
					<div className="containerQuizz3">

                      <Logo/>
					  <div className="containerBorder">
				      <div>
					   <h1> {questions[currentQuestion].questionText} </h1>
				       </div>

					<animated.div style={animationW} className={questions[currentQuestion].class}>
				{questions[currentQuestion].answerOptions.map(e=>(

					<button className={e.btn} key={e.id} onClick={()=>handleAnswer(e.isCorrect)} > {e.answerText} </button>

				))}
				</animated.div>
				<div  className="answers">
                   {showImg === true &&(
					<>
						 <h1 className="correcto">CORRECTO</h1>
					     <animated.button style={stylesBtn} 
						 className="btn-next" 
						 onClick={nextQuestion} >Continuar</animated.button>	
					</>
				   )}
				     {showImg === false &&(
				        <>
							<h1 className="incorrecto">INCORRECTO</h1>
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
			</div>
			)}
		</div>
	);
}

export default Quiz;