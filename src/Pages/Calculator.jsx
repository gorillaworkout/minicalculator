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
import {AiOutlineCheckCircle,AiOutlineCloseCircle} from 'react-icons/ai'
import Swal from 'sweetalert2'


export default function Calculator(){
    const Swal = require('sweetalert2')
    const [dataInput,setDataInput]=useState(
        [{inputSatu:0,isInputSatu:false}, {inputSatu:0,isInputSatu:false},{inputSatu:0,isInputSatu:false}])
    
  
        useEffect(()=>{
            console.log(dataInput[0].isInputSatu)
        })
    
    const[totalPerhitungan,setTotalPerhitungan]=useState(0)
    const[memories,setMemories]=(useState([]))

    const funcSatu=(angka,dataIsi)=>{
        let angkaParse = parseInt(angka)
        if(dataIsi===1){
            // console.log(angka.length === 0, ' ini data angka.length')
            if(angka.length === 0){
                // console.log('masuk ke if angka.length')
                let newArr= [...dataInput]
                newArr[0] = {inputSatu:0,isInputSatu:false}
                setDataInput(newArr)
            }else {
                let newArr= [...dataInput]
                newArr[0] = {inputSatu:angkaParse,isInputSatu:true}
                setDataInput(newArr)
            }
        }else if(dataIsi===2){
            if(angka.length === 0 ){
                let newArr= [...dataInput]
                newArr[1] = {inputSatu:0,isInputSatu:false}
                setDataInput(newArr)
            }else {
                let newArr= [...dataInput]
                newArr[1] = {inputSatu:angkaParse,isInputSatu:true}
                setDataInput(newArr)
            }
        }else if (dataIsi===3){
            if(angka.length === 0){
                let newArr= [...dataInput]
                newArr[2] = {inputSatu:0,isInputSatu:false}
                setDataInput(newArr)
            }else {
                let newArr= [...dataInput]
                newArr[2] = {inputSatu:angkaParse,isInputSatu:true}
                setDataInput(newArr)
            }
        }   
    }


    const perhitungan=(hitung)=>{
        let dataPerhitungan=[]
        let pembulatan=Math.ceil(hitung)
            setTotalPerhitungan(pembulatan)
            dataPerhitungan.push(pembulatan)
            memories.push(pembulatan)
    }
    const onTotal2=(operasi)=>{
        
        let dataHitung=[]
        // console.log(dataInput)
        var filterTrue = dataInput.filter(function(val){
            if(val.isInputSatu){
                dataHitung.push(val.inputSatu)
            }
            return val.isInputSatu === true
        })
        if(filterTrue.length === 1){
            Swal.fire({
                        title: 'Error!',
                        text: 'Tidak Boleh Mengisi Hanya 1 Input Data',
                        icon: 'error',
                        confirmButtonText: 'Cool'
                        })
        }else if(operasi === 'tambah'){
            var hitung = dataHitung.reduce((total,amount)=>total+amount)
            perhitungan(hitung)
        }else if (operasi === 'kurang'){
            var hitung = dataHitung.reduce((total,amount)=>total-amount)
            perhitungan(hitung)
        }else if ( operasi === 'kali'){
            console.log('masuk ke kali')
            var hitung = dataHitung.reduce((total,amount)=>total*amount)
            perhitungan(hitung)
        }else if ( operasi === 'bagi'){
            var hitung = dataHitung.reduce((total,amount)=>total/amount)
            perhitungan(hitung)
        }
        
    }


    // const onTotal=(operasi)=>{
    //     let total = 0
        
    //     let dataPerhitungan=[]
    //     if(operasi === 'tambah'){
            
    //         if(isInputSatu && isInputDua && isInputTiga){
    //             total += inputSatu + inputDua + inputTiga
    //         }else if(isInputSatu && isInputDua){
    //             total += inputSatu + inputDua
    //         }else if (isInputSatu && isInputTiga){
    //             total += inputSatu + inputTiga
    //         }else if (isInputDua && isInputTiga){
    //             total +=inputDua + inputTiga
    //         }else {
    //             // alert('Tidak Boleh Hanya Mengisi 1 Input')
    //             Swal.fire({
    //                 title: 'Error!',
    //                 text: 'Tidak Boleh Mengisi Hanya 1 Input Data',
    //                 icon: 'error',
    //                 confirmButtonText: 'Cool'
    //               })
    //         }
            
    //     }else if (operasi === 'kurang'){      
    //         if(isInputSatu && isInputDua && isInputTiga){
    //             total += inputSatu - inputDua - inputTiga
    //         }else if(isInputSatu && isInputDua){
    //             total += inputSatu - inputDua
    //         }else if (isInputSatu && isInputTiga){
    //             total += inputSatu - inputTiga
    //         }else if (isInputDua && isInputTiga){
    //             total +=inputDua - inputTiga
    //         }else {
    //             alert('Tidak Boleh Hanya Mengisi 1 Input')
    //         }        
    //     }else if (operasi === 'bagi'){           
    //         if(isInputSatu && isInputDua && isInputTiga){
    //             total += inputSatu / inputDua / inputTiga
    //         }else if(isInputSatu && isInputDua){
    //             total += inputSatu /inputDua
    //         }else if (isInputSatu && isInputTiga){
    //             total += inputSatu / inputTiga
    //         }else if (isInputDua && isInputTiga){
    //             total +=inputDua / inputTiga
    //         }else {
    //             alert('Tidak Boleh Hanya Mengisi 1 Input')
    //         }          
    //     }else if(operasi === 'kali'){
            
    //         if(isInputSatu && isInputDua && isInputTiga){
    //             total += inputSatu * inputDua * inputTiga
    //         }else if(isInputSatu && isInputDua){
    //             total += inputSatu * inputDua
    //         }else if (isInputSatu && isInputTiga){
    //             total += inputSatu * inputTiga
    //         }else if (isInputDua && isInputTiga){
    //             total +=inputDua * inputTiga
    //         }else {
    //             alert('Tidak Boleh Hanya Mengisi 1 Input')
    //         }       
    //     }
    //     let pembulatan=Math.ceil(total)
    //     setTotalPerhitungan(pembulatan)
    //     dataPerhitungan.push(pembulatan)
    //     memories.push(pembulatan)
    // }

    const renderDataPerhitungan=()=>{
        // console.log(memories)
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
                                    <div className="box-input">
                                        <input type="number" className="input-form"   placeholder="Your Number" onChange={(e)=>funcSatu(e.target.value,1)}></input>
                                        {
                                            dataInput[0].isInputSatu ?
                                            <AiOutlineCheckCircle className="icon-correct"/>
                                            :
                                            null
                                        }
                                    </div>
                                </div>
                                <div className="input-calc">
                                    <p>Input Your Number:</p>
                                    <div>
                                        <input type="number" className="input-form" placeholder="Your Number" onChange={(e)=>funcSatu(e.target.value,2)}></input>
                                        {
                                            dataInput[1].isInputSatu ?
                                            <AiOutlineCheckCircle className="icon-correct"/>
                                            :
                                            null
                                        }
                                    </div>
                                </div>
                                <div className="input-calc">
                                    <p>Input Your Number:</p>
                                    <div>
                                        <input  type="number"className="input-form"  placeholder="Your Number" onChange={(e)=>funcSatu(e.target.value,3)}></input>
                                        {
                                            dataInput[2].isInputSatu ?
                                            <AiOutlineCheckCircle className="icon-correct"/>
                                            :
                                            null
                                        }
                                    </div>
                                </div>
                                <div className="box-perhitungan">
                                    <div onClick={()=>onTotal2('tambah')} className="oper-hitungan">
                                        <AiOutlinePlus/>
                                    </div>
                                    <div onClick={()=>onTotal2('kurang')} className="oper-hitungan">
                                        <AiOutlineMinus/>
                                    </div>
                                    <div onClick={()=>onTotal2('kali')} className="oper-hitungan">
                                        <TiTimes/>
                                    </div>
                                    <div onClick={()=>onTotal2('bagi')} className="oper-hitungan">  
                                        <RiDivideFill/>
                                    </div>
                                   
                                </div>
                            </div>
                            <div className="box-calc-kanan">
                                <div className="box-input-kiri">
                                    <p style={{fontSize:'25px'}}>RESULT</p>
                                    <p className="total-per">{totalPerhitungan}</p>
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