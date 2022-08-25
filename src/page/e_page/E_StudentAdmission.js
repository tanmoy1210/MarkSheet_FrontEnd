import React from 'react'
import Header from "../../components/Header";
import { Sidebar } from "../../components/sidebar";
import { useRef, useState, useEffect } from "react";
import {gettoken,getclientID} from "../../httpservice/token";
import Service from "../../httpservice/http"; 
import sha256 from "../../httpservice/sha256";
import { Link, useNavigate, useLocation } from 'react-router-dom';

export const StudentAdmission = () => {

    const currentPageRef = useRef();
    const errRef = useRef();

    const navigate = useNavigate();
    const location = useLocation();
    const navigateTo =  "/StudentAdmissionList";

    //Fields

    //End Fields

  return (
    <div>
      
    </div>
  )
}

