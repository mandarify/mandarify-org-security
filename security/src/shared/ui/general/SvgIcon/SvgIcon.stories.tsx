import type { Meta, StoryObj } from "@storybook/react";
// import { fn } from '@storybook/test';

import SvgIcon from "./SvgIcon";
import { CoffeeSVG } from "../../../icons";
import "../../../../app/style/index.css";


const meta = {
   title: 'Shared/General/SvgIcon',
   component: SvgIcon,
   parameters: {
      layout: 'centered',
   },
   tags: ['autodocs'],
   args: {
      boxClass: '',
   },
   argTypes: {
      children: {
         description: 'React компонент SVG элемента.'
      },
      boxClass: {
         control: 'text',
         description: 'Класс родительского компонента.'
      },
      iconSize: {
         control: {
            type: 'number',
            min: 16,
            max: 30,
            step: 2,
         },
         description: 'Размер иконки.'
      },
   }
} satisfies Meta<typeof SvgIcon>;

export default meta;


type Story = StoryObj<typeof meta>;

export const Icon_16: Story = {
   args: {
      children: <CoffeeSVG />,
      iconSize: 16,
   },
   parameters: {
      docs: {
         description: {
            story: "Размер svg иконки 16x на 16px."
         }
      }
   }
}

export const Icon_24: Story = {
   args: {
      children: <CoffeeSVG />,
      iconSize: 24,
   },
   parameters: {
      docs: {
         description: {
            story: "Размер svg иконки 24px на 24px."
         }
      }
   }
}

export const Icon_30: Story = {
   args: {
      children: <CoffeeSVG />,
      iconSize: 30,
   },
   parameters: {
      docs: {
         description: {
            story: "Размер svg иконки 30px на 30px."
         }
      }
   }
}