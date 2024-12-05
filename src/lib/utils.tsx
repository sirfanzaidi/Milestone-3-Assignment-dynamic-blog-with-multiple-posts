import {clsx, type ClassValue} from 'clsx'
import { twJoin, twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]){
  return  twJoin(
    clsx(inputs))
}