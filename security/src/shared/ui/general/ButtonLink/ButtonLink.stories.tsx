import type { Meta, StoryObj } from "@storybook/react";

import ButtonLink from "./ButtonLink";
import "../../../../app/style/index.css";

import { LogoSVG, BooksSVG, LightSVG, CoffeeSVG } from "../../../icons/index";


const meta = {
   title: 'Shared/Buttons/ButtonLink',
   component: ButtonLink,
   parameters: {
      layout: 'centered',
   },
   tags: ['autodocs'],
   argTypes: {
      children: {
         description: 'React компонент SVG элемента (иконка).'
      },
      boxClass: {
         control: 'text',
         description: 'Класс родительского компонента.'
      },
      href: {
         control: 'text',
         description: 'Ссылка на интернет ресурс или якорь элемента на странице.'
      },
      text: {
         control: 'text',
         description: 'Название кнопки.'
      },
      iconSize: {
         control: {
            type: 'number',
            min: 16,
            max: 30,
            step: 2,
         },
         description: 'Размер SVG иконки.'
      },
      fill: {
         description: 'Длина кнопки: фиксированная или 100%',
      }
   }

} satisfies Meta<typeof ButtonLink>;

export default meta;


type Story = StoryObj<typeof meta>;

export const Primary_1: Story = {
   name: 'Primary-Icon-Text',
   args: {
      children: <LogoSVG />,
      text: 'Текст',
      iconSize: 16,
   },
   parameters: {
      docs: {
         description: {
            story: 'Стандартная кнопка с текстом • Ссылка: #',
         },
      },
   },
   decorators: [
      (Story) => (<div style={{ width: '214px', display: 'flex', justifyContent: 'center' }}><Story /></div>)
   ],
};

export const Primary_2: Story = {
   name: 'Primary-Icon',
   args: {
      children: <LogoSVG />,
      iconSize: 16,
   },
   parameters: {
      docs: {
         description: {
            story: 'Стандартная кнопка без текста • Ссылка: #',
         },
      },
   },
   decorators: [
      (Story) => (<div style={{ width: '214px', display: 'flex', justifyContent: 'center' }}><Story /></div>)
   ],
};

export const Donation: Story = {
   name: 'Donation',
   args: {
      children: <CoffeeSVG />,
      boxClass: 'donation',
      href: 'https://buymeacoffee.com/mandarify',
      text: 'Купи мне кофе',
      iconSize: 16,
   },
   parameters: {
      docs: {
         description: {
            story: 'Кнопа для доната • Ссылка: https://buymeacoffee.com/mandarify',
         },
      },
   },
   decorators: [
      (Story) => (<div style={{ width: '214px', display: 'flex', justifyContent: 'center' }}><Story /></div>)
   ],
};

export const Instruction: Story = {
   name: 'Instruction',
   args: {
      children: <BooksSVG />,
      boxClass: 'instruction',
      href: '#instruction',
      text: 'Инструкция',
      iconSize: 14,
   },
   parameters: {
      docs: {
         description: {
            story: 'Кнопка якорь "Инструкция" • Ссылка: #instruction',
         },
      },
   },
   decorators: [
      (Story) => (<div style={{ width: '214px', display: 'flex', justifyContent: 'center' }}><Story /></div>)
   ],
};

export const Instruction_Fill: Story = {
   name: 'Instruction Fill',
   args: {
      children: <BooksSVG />,
      boxClass: 'instruction',
      href: '#instruction',
      text: 'Прочитать Инструкцию',
      iconSize: 14,
      fill: '_width_fill',
   },
   parameters: {
      docs: {
         description: {
            story: 'Кнопка якорь "Инструкция" • width 100% • Ссылка: #instruction',
         },
      },
   },
   decorators: [
      (Story) => (<div style={{ width: '214px', display: 'flex', justifyContent: 'center' }}><Story /></div>)
   ],
};

export const FAQ: Story = {
   name: 'FAQ',
   args: {
      children: <LightSVG />,
      boxClass: 'faq',
      href: '#faq',
      text: 'FAQ',
      iconSize: 14,
   },
   parameters: {
      docs: {
         description: {
            story: 'Кнопка якорь "FAQ" • Ссылка: #faq',
         },
      },
   },
   decorators: [
      (Story) => (<div style={{ width: '214px', display: 'flex', justifyContent: 'center' }}><Story /></div>)
   ],
};