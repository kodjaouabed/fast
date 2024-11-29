import React, { useState } from 'react'
import { FaBars, FaPhone , FaAngleDown,FaX, FaAngleRight} from 'react-icons/fa6'
import "./header.css"

export default function Header() {
  const [positionmenu,setPositionPenu]=useState(-400)

  function menuopen() {
     if (positionmenu===-400) {
      setPositionPenu(0)
     } else {
      setPositionPenu(-400)
     }
  }
  return (
    <header>
        <div className='conteneur_header'>
        <img src="./images/logo.png" alt="" />
        <nav>
            
            
        <div>
              <ul>
                <li>
                  <a href="">Acceuil</a>
                  
                </li>

              </ul>
            </div>
            
            
            <div>
              <ul>
                <li>
                  <a href="">Services</a><span><FaAngleDown style={{fontSize:10,color:"white",marginLeft:5}} onClick={()=>{document.querySelector(".souslien1").style.display==="none"?document.querySelector(".souslien1").style.display="block":document.querySelector(".souslien1").style.display="none"}} /></span>
                  <ul className='souslien1' style={{display:"none",position:"absolute",textAlign:"left",backgroundColor:"rgba(0,0,0,0.7)",marginTop:22,paddingRight:20,paddingBottom:20}}>
                    <li style={{marginTop:15}}><a href="">Dépannage Rapide</a></li>
                    <li style={{marginTop:15}}><a href="">Entretien Programmé</a></li>
                    <li style={{marginTop:15}}><a href="">Prêt de Véhicule</a></li>
                    <li style={{marginTop:15}}><a href="">Abonnements</a></li>
                    
                    
                  </ul>
                </li>

              </ul>
            </div>


            <div>
              <ul>
                <li>
                  <a href="">Mon compte</a><span><FaAngleDown style={{fontSize:10,color:"white",marginLeft:5}} onClick={()=>{document.querySelector(".souslien2").style.display==="none"?document.querySelector(".souslien2").style.display="block":document.querySelector(".souslien2").style.display="none"}} /></span>
                  <ul className='souslien2' style={{display:"none",position:"absolute",textAlign:"left",backgroundColor:"rgba(0,0,0,0.7)",marginTop:22,paddingRight:20,paddingBottom:20}}>
                    <li style={{marginTop:15}}><a href="">Se connecter</a></li>
                    <li style={{marginTop:15}}><a href="">S'inscrire</a></li>
                    <li style={{marginTop:15}}><a href="">Historique des Interventions</a></li>
                    <li style={{marginTop:15}}><a href="">Portefeuille</a></li>
                    <li style={{marginTop:15}}><a href="">Profil</a></li>
                  </ul>
                </li>

              </ul>
            </div>



            <div>
              <ul>
                <li>
                  <a href="">Informations</a><span><FaAngleDown style={{fontSize:10,color:"white",marginLeft:5}} onClick={()=>{document.querySelector(".souslien3").style.display==="none"?document.querySelector(".souslien3").style.display="block":document.querySelector(".souslien3").style.display="none"}} /></span>
                  <ul className='souslien3' style={{display:"none",position:"absolute",textAlign:"left",backgroundColor:"rgba(0,0,0,0.7)",marginTop:22,paddingRight:20,paddingBottom:20}}>
                    <li style={{marginTop:15,marginLeft:-20}}><a href="">A propos</a></li>
                    <li style={{marginTop:15,marginLeft:-20}}><a href="">Support</a></li>
                    <li style={{marginTop:15,marginLeft:-20}}><a href="">Mentions Légales</a></li>
                    
                  </ul>
                </li>

              </ul>
            </div>
            
            
        </nav>
        <div className='call'><a href="" style={{display:"flex",justifyContent:"space-around",alignItems:"center",gap:5,textDecoration:"none"}}><FaPhone  className='iconcall'  style={{color:"white",fontSize:25,backgroundColor:"rgba(50, 50, 245,1)",padding:7,borderRadius:50,padding:10}} /> <p style={{color:"white"}}>+229 68364255</p></a>  </div>

        <div className='menubtn'><FaBars className='menu' onClick={menuopen} /></div>
        </div>


        <div className='menu_container' style={{marginRight:positionmenu}}>
            <div className='closebtn'>
               <FaX className='close' onClick={menuopen}/>
            </div>

            <div>
              <ul>
                <li>
                  <a href="">Acceuil</a>
                </li>
              </ul>
            </div>

            <div>
              <ul>
                <li>
                <a href="">Services</a><span><FaAngleRight  className='serviceopen'  style={{fontSize:10,color:"white",marginLeft:5}} onClick={()=>{document.querySelector(".serviceslien").style.display="block";document.querySelector(".serviceopen").style.display="none";document.querySelector(".serviceclose").style.display="inline-block"}} /><FaAngleDown  className='serviceclose'  style={{fontSize:10,color:"white",marginLeft:5,display:"none"}} onClick={()=>{document.querySelector(".serviceslien").style.display="none";document.querySelector(".serviceclose").style.display="none";document.querySelector(".serviceopen").style.display="inline-block"}} /></span>
                <ul className='serviceslien' style={{display:"none"}}>
                    <li style={{marginTop:15}}><a href="">Dépannage Rapide</a></li>
                    <li style={{marginTop:15}}><a href="">Entretien Programmé</a></li>
                    <li style={{marginTop:15}}><a href="">Prêt de Véhicule</a></li>
                    <li style={{marginTop:15}}><a href="">Abonnements</a></li>
                    
                    
                  </ul>
                </li>
              </ul>
            </div>



            <div>
              <ul>
                <li>
                <a href="">Mon compte</a><span><FaAngleRight  className='compteopen'  style={{fontSize:10,color:"white",marginLeft:5}} onClick={()=>{document.querySelector(".comptelien").style.display="block";document.querySelector(".compteopen").style.display="none";document.querySelector(".compteclose").style.display="inline-block"}} /><FaAngleDown  className='compteclose'  style={{fontSize:10,color:"white",marginLeft:5,display:"none"}} onClick={()=>{document.querySelector(".comptelien").style.display="none";document.querySelector(".compteclose").style.display="none";document.querySelector(".compteopen").style.display="inline-block"}} /></span>
                <ul className='comptelien' style={{display:"none"}}>
                    <li style={{marginTop:15}}><a href="">Se connecter</a></li>
                    <li style={{marginTop:15}}><a href="">S'inscrire</a></li>
                    <li style={{marginTop:15}}><a href="">Historique des Interventions</a></li>
                    <li style={{marginTop:15}}><a href="">Portefeuille</a></li>
                    <li style={{marginTop:15}}><a href="">Profil</a></li>
                    
                    
                  </ul>
                </li>
              </ul>
            </div>



            <div>
              <ul>
                <li>
                <a href="">Informations</a><span><FaAngleRight  className='informationopen'  style={{fontSize:10,color:"white",marginLeft:5}} onClick={()=>{document.querySelector(".informationlien").style.display="block";document.querySelector(".informationopen").style.display="none";document.querySelector(".informationclose").style.display="inline-block"}} /><FaAngleDown  className='informationclose'  style={{fontSize:10,color:"white",marginLeft:5,display:"none"}} onClick={()=>{document.querySelector(".informationlien").style.display="none";document.querySelector(".informationclose").style.display="none";document.querySelector(".informationopen").style.display="inline-block"}} /></span>
                <ul className='informationlien' style={{display:"none"}}>
                    <li style={{marginTop:15,marginLeft:-20}}><a href="">A propos</a></li>
                    <li style={{marginTop:15,marginLeft:-20}}><a href="">Support</a></li>
                    <li style={{marginTop:15,marginLeft:-20}}><a href="">Mentions Légales</a></li>
                  </ul>
                </li>
              </ul>
            </div>



        </div>


       </header>

       
  )
}
