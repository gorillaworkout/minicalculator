import React, { Component,memo,useEffect,useState } from 'react';
import './Calculator.css'
import {AiOutlinePlus,AiOutlineMinus} from 'react-icons/ai'
import {RiDivideFill} from 'react-icons/ri'
import {TiTimes} from 'react-icons/ti'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Scrollbars } from 'react-custom-scrollbars';


export default function Calculator(){
    
    const[inputSatu,setInputSatu]=useState(0)
    const[inputDua,setInputDua]=useState(0)
    const[inputTiga,setInputTiga]=useState(0)

    const[isInputSatu,setIsInputSatu]=useState(false)
    const[isInputDua,setIsInputDua]=useState(false)
    const[isInputTiga,setIsInputTiga]=useState(false)
    
    const[totalPerhitungan,setTotalPerhitungan]=useState(0)
    const[memories,setMemories]=(useState([]))

    const funcSatu=(angka,dataIsi)=>{
        // console.log(angka)
        // console.log(dataIsi)
        // console.log(angka)
        let angkaParse = parseInt(angka)
        if(dataIsi===1){
            // console.log(angka.length === 0, ' ini data angka.length')
            if(angka.length === 0){
                // console.log('masuk ke if angka.length')
                setInputSatu(0)
                setIsInputSatu(false)
                
            }else {
                setInputSatu(angkaParse)
                setIsInputSatu(true)

            }
        }else if(dataIsi===2){
            if(angka.length === 0 ){
                setInputDua(0)
                setIsInputDua(false)
            }else {
                setInputDua(angkaParse)
                setIsInputDua(true)

            }
        }else if (dataIsi===3){
            if(angka.length === 0){
                setInputTiga(0)
                setIsInputTiga(false)
            }else {
                setInputTiga(angkaParse)
                setIsInputTiga(true)
            }
        }

        
        
    }



    const onTotal=(operasi)=>{
        let total = 0
        
        let dataPerhitungan=[]
        if(operasi === 'tambah'){
            
            if(isInputSatu && isInputDua && isInputTiga){
                total += inputSatu + inputDua + inputTiga
            }else if(isInputSatu && isInputDua){
                total += inputSatu + inputDua
            }else if (isInputSatu && isInputTiga){
                total += inputSatu + inputTiga
            }else if (isInputDua && isInputTiga){
                total +=inputDua + inputTiga
            }else {
                alert('Tidak Boleh Hanya Mengisi 1 Input')
            }
            
        }else if (operasi === 'kurang'){      
            if(isInputSatu && isInputDua && isInputTiga){
                total += inputSatu - inputDua - inputTiga
            }else if(isInputSatu && isInputDua){
                total += inputSatu - inputDua
            }else if (isInputSatu && isInputTiga){
                total += inputSatu - inputTiga
            }else if (isInputDua && isInputTiga){
                total +=inputDua - inputTiga
            }else {
                alert('Tidak Boleh Hanya Mengisi 1 Input')
            }        
        }else if (operasi === 'bagi'){           
            if(isInputSatu && isInputDua && isInputTiga){
                total += inputSatu / inputDua / inputTiga
            }else if(isInputSatu && isInputDua){
                total += inputSatu /inputDua
            }else if (isInputSatu && isInputTiga){
                total += inputSatu / inputTiga
            }else if (isInputDua && isInputTiga){
                total +=inputDua / inputTiga
            }else {
                alert('Tidak Boleh Hanya Mengisi 1 Input')
            }          
        }else if(operasi === 'kali'){
            
            if(isInputSatu && isInputDua && isInputTiga){
                total += inputSatu * inputDua * inputTiga
            }else if(isInputSatu && isInputDua){
                total += inputSatu * inputDua
            }else if (isInputSatu && isInputTiga){
                total += inputSatu * inputTiga
            }else if (isInputDua && isInputTiga){
                total +=inputDua * inputTiga
            }else {
                alert('Tidak Boleh Hanya Mengisi 1 Input')
            }       
        }
        let pembulatan=Math.ceil(total)
        setTotalPerhitungan(pembulatan)
        dataPerhitungan.push(pembulatan)
        memories.push(pembulatan)
    }

    const renderDataPerhitungan=()=>{
        console.log(memories)
        return memories.map((val,index)=>{
            console.log(val,' INI VAL')
            return (
                <>
                    <TableRow key={index}>
                        <TableCell>{index+1}</TableCell>
                        <TableCell>{val}</TableCell>
                    </TableRow>
                </>
            )
        })
    }
    const onReset=()=>{
        setMemories([])
        setInputSatu(0)
        setInputDua(0)
        setInputTiga(0)
        setTotalPerhitungan(0)
    }
    

    return (
        <>

       <div className="big-box">
           <div className="container">
                <div className="box-calculator">
                        <div className="calc-name">
                            <p>Calculator</p>
                        </div>
                        <div className="box-inside">
                            <div className="box-calc-kiri">
                                <div className="input-calc">
                                    <p>Input Your Number:</p>
                                    <div>
                                        <input type="number" className="input-form"   placeholder="Your Number" onChange={(e)=>funcSatu(e.target.value,1)}></input>
                                    </div>
                                </div>
                                <div className="input-calc">
                                    <p>Input Your Number:</p>
                                    <div>
                                        <input type="number" className="input-form" placeholder="Your Number" onChange={(e)=>funcSatu(e.target.value,2)}></input>
                                    </div>
                                </div>
                                <div className="input-calc">
                                    <p>Input Your Number:</p>
                                    <div>
                                        <input  type="number"className="input-form"  placeholder="Your Number" onChange={(e)=>funcSatu(e.target.value,3)}></input>
                                    </div>
                                </div>
                                <div className="box-perhitungan">
                                    <div onClick={()=>onTotal('tambah')} className="oper-hitungan">
                                        <AiOutlinePlus/>
                                    </div>
                                    <div onClick={()=>onTotal('kurang')} className="oper-hitungan">
                                        <AiOutlineMinus/>
                                    </div>
                                    <div onClick={()=>onTotal('kali')} className="oper-hitungan">
                                        <TiTimes/>
                                    </div>
                                    <div onClick={()=>onTotal('bagi')} className="oper-hitungan">  
                                        <RiDivideFill/>
                                    </div>
                                   
                                </div>
                            </div>
                            <div className="box-calc-kanan">
                                <div className="box-input-kiri">
                                    <p style={{fontSize:'25px'}}>RESULT</p>
                                    <p style={{fontSize:'45px'}}>{totalPerhitungan}</p>
                                    <div onClick={onReset} className="oper-hitungan">  
                                        <p style={{fontWeight:'700', marginTop:10}}>RESET</p>
                                    </div>
                                </div>
                                <div className="box-input-kanan">
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell></TableCell>
                                                {/* <TableCell>Data</TableCell> */}
                                            </TableRow>
                                        </TableHead>
                                        <TableBody >
                                            <Scrollbars autoHeight style={{width:'100%',height:'100%'}}>
                                                {renderDataPerhitungan()}

                                            </Scrollbars>
            
                                        </TableBody>
                                    </Table>
                                </div>

                            </div>

                        </div>

                </div>
           </div>
       </div>
        </>
    )
}