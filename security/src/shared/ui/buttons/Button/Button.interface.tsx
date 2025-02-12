import { JSX } from "react";


export interface IButton {

   children?: JSX.Element | null,
   iconSize?: number,
   text?: string,

   boxClass?: string,
   sView?: 'btn_transparent' | 'btn_normal' | 'btn_orange' | 'btn_salad' | 'btn-custom_geld' | 'btn-custom_brand' | 'btn-custom_green',
   sW?: 'btn_w_max' | 'btn_w_fill',
   sH?: 'btn_h_max' | 'btn_h_fill' | 'btn_h_30',
   sR?: 'btn_r_auto' | 'btn_r_half',
};
