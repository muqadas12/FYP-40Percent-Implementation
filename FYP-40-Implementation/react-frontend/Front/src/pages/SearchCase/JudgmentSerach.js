import React,{useState} from "react";
import "./judgment.css"
import judgment from "../../assets/Images/jj.jpg";
import Box from "../../components/BoxJ"


const JudgmentSearch=(props)=>{
  const[judge,setJudge]=useState();
  let [dataJudgment, setData] = useState([]);
  const[party,setParty]=useState();
  const[keyword,setKeyword]=useState();
  const [
    judgmentDate,
    caseSubject,
    caseNo,
    caseTitle,
    authorJudge,
    download,
    Tag
  ]=useState();
  const handleSubmit = (evt) => {
    if(dataJudgment.authorJudge==authorJudge  ){
      return <div>{dataJudgment}</div>   

    }

}



  

  return(
    
    <div>
<div>{dataJudgment.map(post=>{
   const {
    judgmentDate,
    caseSubject,
    caseNo,
    caseTitle,
    authorJudge,
    download,
    Tag
} = post;
})}</div>

    <img className="responsive-image" src={judgment} />
    
    <h3 className="j-search">Judgment Search:</h3>
    <br/>
    <Box/>
    <br/>
  
<form>

  <label className="judge-name">Judge Name:</label>
  <select >
        <option name="select judge name">Select Judge name</option>
        <option name="Mr Justice Gulzar Ahmed">Mr Justice Gulzar Ahmed</option>
        <option name="Mr Justice Mushir Alam">Mr Justice Mushir Alam</option>
        <option name="Mr Justice Umar Ata Bandial">Mr Justice Umar Ata Bandial</option>
        <option name="Mr Justice Qazi Faez Isa">Mr Justice Qazi Faez Isa</option>
        <option name="Mr Justice Maqbool Baqar">Mr Justice Maqbool Baqar</option>
        <option name="Mr Justice Manzoor Ahmad Malik">Mr Justice Manzoor Ahmad Malik</option>
        <option name="Mr Justice Sardar Tariq Masood">Mr Justice Sardar Tariq Masood</option>
        <option name="Mr Justice Faisal Arab">Mr Justice Faisal Arab</option>
        <option name="Mr Justice Ijaz ul Ahsan">Mr Justice Ijaz ul Ahsan</option>
        <option name="Mr Justice Mazhar Alam Khan Mainkhel">Mr Justice Mazhar Alam Khan Mainkhel</option>
        <option name="Mr Justice Sajjad Ali shah">Mr Justice Sajjad Ali shah</option>
        <option name="Mr Justice Syed Mansoor Ali Shah">Mr Justice Syed Mansoor Ali Shah</option>
        <option name="Mr Justice Munib Akhtar">Mr Justice Munib Akhtar</option>
        <option name="Mr Justice Yahya Afridi">Mr Justice Yahya Afridi</option>
        <option name="Mr Justice Qazi Muhmmad Amin Ahmed">Mr Justice Qazi Muhmmad Amin Ahmed</option>
        <option name="Mr Justice Amin-ud-din Khan">Mr Justice Amin-ud-din Khan</option>
        <option name="Mr Justice Syed Mazhar Ali Naqvi">Mr Justice Syed Mazhar Ali Naqvi</option>
        <option name="Mr Justice Dr Muhmmad Ali Gazali">Mr Justice Dr Muhmmad Ali Gazali</option>
        <option name="Mr Justice Nasirul Mulk">Mr Justice Nasirul Mulk</option>
        <option name="Mr Justice Jawwad S.Khawaja">Mr Justice Jawwad S.Khawaja</option>
        <option name="Mr Justice Javed Iqbal">Mr Justice Javed Iqbal</option>
        <option name="Mr Justice Raja Fayaz Ahmed">Mr Justice Raja Fayaz Ahmed</option>
        <option name="Mr Justice Rana Zahid Mehmood">Mr Justice Rana Zahid Mehmood</option>
        <option name="Mr Justice Anwar Zaheer Jamali">Mr Justice Javed Iqbal</option>
        <option name="Mr Justice Mian Saqib Nisar">Mr Justice Mian Saqib Nisar</option>
        <option name="Mr Justice Asif Saeed Khan Khosa">Mr Justice Asif Saeed Khan Khosa</option>
        <option name="Mr Justice Amir Hani Muslim">Mr Justice Amir Hani Muslim</option>
        <option name="Mr Justice Ejaz Afzal Khan">Mr Justice Ejaz Afzal Khan</option>
        <option name="Mr Justice Dost Muhammad Khan">Mr Justice Dost Muhammad Khan</option>
        <option name="Mr Justice Sh.Azmat Saeed">Mr Justice Sh.Azmat Saeed</option>
        <option name="Mr Justice Iqbal Hameed Ur Rehman">Mr Justice Iqbal Hameed Ur Rehman</option>
        <option name="Mr Justice TASADUQ HUSSAIN JILANNI">Mr Justice TASADUQ HUSSAIN JILANNI</option>
        <option name="Mr Justice Tariq Parvez">Mr Justice Tariq Parvez</option>
        <option name="Mr Justice Khilji Arif Hussain">Mr Justice Khilji Arif Hussain</option>

      </select>
  <label className="party-name">Party Name:</label>
  <input type="texxt" value={party} onChange={e=>setParty(e.target.value)}/>
  <label className="keyword">Keyword/Tagline:</label>
  <input type="texxt" value={keyword} onChange={e=>setKeyword(e.target.value)} />
 
  <button onClick={handleSubmit} className="button-submit" >Submit</button>

</form>
</div>

  )
}
export default JudgmentSearch;













