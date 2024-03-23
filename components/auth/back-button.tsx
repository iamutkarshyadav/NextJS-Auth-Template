"use client"
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link';

interface BackButtonProps { 
  href: string;
  label: string;
};

export const BackButton = ({
  href,
  label
 }:BackButtonProps) => {
  return (
      <Button>
      <Link
        href={href}
      >
        {label}
      </Link>  
    </Button>
  )
}
