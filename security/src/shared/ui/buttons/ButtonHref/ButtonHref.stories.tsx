import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import ButtonHref from "./ButtonHref";
import { LogoSVG } from "../../../icons";
import "../../../../app/style/index.css";


const decoratorsStyle: React.CSSProperties = {
   width: '300px',
   height: '60px',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center'
}


const meta = {
   title: 'UI/BUTTONS/ButtonHref',
   component: ButtonHref,
   parameters: { layout: 'centered' },
   tags: ['autodocs'],
   decorators: [(Story) => (<div style={decoratorsStyle}><Story /></div>)],
   argTypes: {
      children: {
         description: 'React компонент SVG элемента (иконка).',
      },
      iconSize: {
         control: {
            type: 'number',
            min: 16,
            max: 30,
            step: 2,
         },
         description: 'Размер Иконки.'
      },
      text: {
         control: 'text',
         description: 'Название кнопки.'
      },
      boxClass: {
         control: 'text',
         description: 'Дополнительный класс родительского компонента.'
      },
      sView: {
         description: 'Тип кнопки.',
         control: {
            type: 'radio',
         },
      },
      sW: {
         description: 'Ширина кнопки.',
         control: {
            type: 'radio',
         },
      },
      sH: {
         description: 'Высота кнопки.',
         control: {
            type: 'radio',
         },
      },
      sR: {
         description: 'Скругление углов кнопки.',
         control: {
            type: 'radio',
         },
      },
      href: {
         control: 'text',
         description: 'Ссылка или якорь элемента на странице.'
      },
   },

} satisfies Meta<typeof ButtonHref>;

export default meta;


type Story = StoryObj<typeof meta>;

export const Button_1: Story = {
   name: 'Icon & Text',
   args: {
      children: <LogoSVG />,
      text: 'Текст',
      iconSize: 16,

      boxClass: '',
      sView: 'btn_normal',
      sH: 'btn_h_30',
      sW: 'btn_w_max',
      sR: 'btn_r_auto',

      href: '#',
   },
   parameters: {
      docs: {
         description: {
            story: 'Кнопка • иконка и текст',
         },
      },
   },
};

export const Button_2: Story = {
   name: 'Text',
   args: {
      text: 'Текст',

      boxClass: '',
      sView: 'btn_normal',
      sH: 'btn_h_30',
      sW: 'btn_w_max',
      sR: 'btn_r_auto',

      href: '#',
   },
   parameters: {
      docs: {
         description: {
            story: 'Кнопка • текст',
         },
      },
   },
};

export const Button_3: Story = {
   name: 'Icon',
   args: {
      children: <LogoSVG />,
      iconSize: 16,

      boxClass: '',
      sView: 'btn_normal',
      sH: 'btn_h_30',
      sW: 'btn_w_max',
      sR: 'btn_r_auto',

      href: '#',
   },
   parameters: {
      docs: {
         description: {
            story: 'Кнопка • иконка',
         },
      },
   },
};

export const Button_4: Story = {
   name: 'Border Radius',
   args: {
      children: <LogoSVG />,
      text: 'Текст',
      iconSize: 16,

      boxClass: '',
      sView: 'btn_normal',
      sH: 'btn_h_30',
      sW: 'btn_w_max',
      sR: 'btn_r_half',

      href: '#',
   },
   parameters: {
      docs: {
         description: {
            story: 'Кнопка • максимальное скругление углов',
         },
      },
   },
};

export const Button_5: Story = {
   name: 'Fill Size',
   args: {
      children: <LogoSVG />,
      text: 'Текст',
      iconSize: 16,

      boxClass: '',
      sView: 'btn_normal',
      sH: 'btn_h_fill',
      sW: 'btn_w_fill',
      sR: 'btn_r_auto',

      href: '#',
   },
   parameters: {
      docs: {
         description: {
            story: 'Кнопка • занимает весь контейнер',
         },
      },
   },
};

export const Button_6: Story = {
   name: 'View Normal',
   args: {
      children: <LogoSVG />,
      text: 'Текст',
      iconSize: 16,

      boxClass: '',
      sView: 'btn_normal',
      sH: 'btn_h_30',
      sW: 'btn_w_max',
      sR: 'btn_r_auto',

      href: '#',
   },
   parameters: {
      docs: {
         description: {
            story: 'Кнопка • стандартное отображение',
         },
      },
   },
};

export const Button_7: Story = {
   name: 'View Transparent',
   args: {
      children: <LogoSVG />,
      text: 'Текст',
      iconSize: 16,

      boxClass: '',
      sView: 'btn_transparent',
      sH: 'btn_h_30',
      sW: 'btn_w_max',
      sR: 'btn_r_auto',

      href: '#',
   },
   parameters: {
      docs: {
         description: {
            story: 'Кнопка • без заднего фона',
         },
      },
   },
};

export const Button_8: Story = {
   name: 'View Orange',
   args: {
      children: <LogoSVG />,
      text: 'Текст',
      iconSize: 16,

      boxClass: '',
      sView: 'btn_orange',
      sH: 'btn_h_30',
      sW: 'btn_w_max',
      sR: 'btn_r_auto',

      href: '#',
   },
   parameters: {
      docs: {
         description: {
            story: 'Формат Кнопки • оранжевая',
         },
      },
   },
};

export const Button_9: Story = {
   name: 'View Salad',
   args: {
      children: <LogoSVG />,
      text: 'Текст',
      iconSize: 16,

      boxClass: '',
      sView: 'btn_salad',
      sH: 'btn_h_30',
      sW: 'btn_w_max',
      sR: 'btn_r_auto',

      href: '#',
   },
   parameters: {
      docs: {
         description: {
            story: 'Формат Кнопки • салатовая',
         },
      },
   },
};

export const Button_10: Story = {
   name: 'View Custom Green',
   args: {
      children: <LogoSVG />,
      text: 'Текст',
      iconSize: 16,

      boxClass: '',
      sView: 'btn-custom_green',
      sH: 'btn_h_30',
      sW: 'btn_w_max',
      sR: 'btn_r_auto',

      href: '#',
   },
   parameters: {
      docs: {
         description: {
            story: 'Кастомная Кнопка • зелень',
         },
      },
   },
};

export const Button_11: Story = {
   name: 'View Custom Geld',
   args: {
      children: <LogoSVG />,
      text: 'Текст',
      iconSize: 16,

      boxClass: '',
      sView: 'btn-custom_geld',
      sH: 'btn_h_30',
      sW: 'btn_w_max',
      sR: 'btn_r_auto',

      href: '#',
   },
   parameters: {
      docs: {
         description: {
            story: 'Кастомная Кнопка • золото',
         },
      },
   },
};

export const Button_12: Story = {
   name: 'View Custom Brand',
   args: {
      children: <LogoSVG />,
      text: 'Текст',
      iconSize: 16,

      boxClass: '',
      sView: 'btn-custom_brand',
      sH: 'btn_h_30',
      sW: 'btn_w_max',
      sR: 'btn_r_auto',

      href: '#',
   },
   parameters: {
      docs: {
         description: {
            story: 'Кастомная Кнопка • бренд',
         },
      },
   },
};