import React from 'react'
import { useState,useEffect } from 'react'
import "./acceuil.css"
import { FaBars, FaPhone , FaAngleDown,FaArrowLeft,FaArrowRight } from 'react-icons/fa6'
import Header from './header'




export default function Acceuil() {

  const [slider,setSlider]=useState(0)
  useEffect(() => {
    const elementsBackground = document.querySelectorAll(".background1, .background2, .background3, .background4");
    const interval=setInterval(() => {
      if (slider<elementsBackground.length-1) {
        setSlider(slider=>slider+1)
        elementsBackground[slider].classList.remove("active")
        elementsBackground[(slider+1) % elementsBackground.length].classList.add("active")
      } else {
        setSlider(0)
        elementsBackground[slider].classList.remove("active")
        elementsBackground[(slider+1) % elementsBackground.length].classList.add("active")
      }
      
      
     
    },6000);

    
    return(
      ()=>{
        clearInterval(interval)
      }
    )
  }, [slider])


  function flecheright() {
    const elementsBackground = document.querySelectorAll(".background1, .background2, .background3, .background4");
   
      if (slider<elementsBackground.length-1) {
        setSlider(slider=>slider+1)
        elementsBackground[slider].classList.remove("active")
        elementsBackground[(slider+1) % elementsBackground.length].classList.add("active")
      } else {
        setSlider(0)
        elementsBackground[slider].classList.remove("active")
        elementsBackground[(slider+1) % elementsBackground.length].classList.add("active")
      }
      
      
     
   
  }







  function flecheleft() {
    const elementsBackground = document.querySelectorAll(".background1, .background2, .background3, .background4");
   
      if (slider===0) {
        setSlider(slider=>elementsBackground.length-1)
        elementsBackground[slider].classList.remove("active")
        elementsBackground[elementsBackground.length-1].classList.add("active")
      } else {
        setSlider(slider=>slider-1)
        elementsBackground[slider].classList.remove("active")
        elementsBackground[(slider-1) % elementsBackground.length].classList.add("active")
      }
  }

  return (
    <div>
      <Header/>
      <div className="conteneur_bg">
      
      
      <div className='background1'>
        
        <div>
        <h2> Gestion facile des utilisateurs </h2>
        <p>Avec FastGarage, la gestion des utilisateurs devient simple et sécurisée. Les clients et mécaniciens peuvent s'inscrire rapidement, avec une vérification rigoureuse des informations personnelles et professionnelles pour garantir la qualité des services..... </p>
        <button class="button-classic">Voir Plus <FaArrowRight className="plus"  /></button>
        </div>

       <span>
        <FaArrowLeft  className='arrowleft'   onClick={flecheleft}  />
        <FaArrowRight className='arrowright'  onClick={flecheright}  />
       </span>
         
      </div>



      <div className='background2'> 
      
       <div>
         <h2> Interventions  via géolocalisation </h2>
         <p>
         Avec FastGarage, bénéficiez d'interventions rapides et efficaces grâce à notre système de géolocalisation avancée. Dès qu'une panne est signalée, l'application localise automatiquement le mécanicien le plus proche pour assurer une intervention rapide...
         </p>
         <button class="button-classic">Voir Plus <FaArrowRight className="plus"  /></button>
        </div>
        <span>
        <FaArrowLeft className='arrowleft'  onClick={flecheleft} />
        <FaArrowRight className='arrowright' onClick={flecheright} />
       </span>

      </div>



      <div className='background3'>
      <div>
        <h2> Paiements simplifiés et sécurisés </h2>
        <p>
        Avec FastGarage, vos paiements sont à la fois simples et totalement sécurisés. Grâce à notre plateforme, vous pouvez facilement effectuer vos paiements via cartes de crédit, mobile money, ou d'autres moyens de paiement sécurisés...
        </p>
        <button class="button-classic">Voir Plus <FaArrowRight className="plus"  /></button>

        </div>

        <span>
        <FaArrowLeft className='arrowleft'  onClick={flecheleft} />
        <FaArrowRight className='arrowright' onClick={flecheright} />
       </span>

       </div>


      <div className='background4'>
      <div>
        <h2> Services supplémentaires pour vous</h2>
        <p>
        Chez FastGarage, nous allons au-delà des simples réparations. Profitez de services supplémentaires pensés pour votre confort, comme le prêt de véhicule temporaire lors de réparations longues, afin que vous puissiez continuer vos déplacements sans souci. 
        </p>
        <button class="button-classic">Voir Plus <FaArrowRight className="plus"  /></button>

        </div>
        <span>
        <FaArrowLeft className='arrowleft' onClick={flecheleft}  />
        <FaArrowRight className='arrowright' onClick={flecheright} />
       </span>
      </div>


      </div>
    </div>
  )
}
