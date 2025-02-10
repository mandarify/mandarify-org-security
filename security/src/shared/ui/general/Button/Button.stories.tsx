import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Button from "./Button";
import "../../../../app/style/index.css";

import { LogoSVG, SettingsSVG, ReliabilitySVG, RocketSVG } from "../../../icons/index";

const meta = {
   title: 'Shared/Buttons/Button',
   component: Button,
   parameters: {
      layout: 'centered',
   },
   tags: ['autodocs'],
   argTypes: {
      children: {
         description: 'React компонент SVG элемента (иконка).'
      },
      boxClass: {
         description: 'Класс родительского компонента.'
      },
      text: {
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
      },
      radius: {
         description: 'Округление углов кнопки: фиксированное или 50%',
      },
      onClick: {
         control: fn,
         description: 'Колбэк функция для события "Клик по кнопке".'
      }
   }

} satisfies Meta<typeof Button>;

export default meta;


type Story = StoryObj<typeof meta>;

export const Button_1: Story = {
   name: 'Primary Standart-1',
   args: {
      children: <LogoSVG />,
      text: 'Текст',
      iconSize: 16,
      onClick: (): void => console.log('Работа кнопки Primary Standart-1.')
   },
   parameters: {
      docs: {
         description: {
            story: 'Кнопка: иконка + текст',
         },
      },
   },
   decorators: [
      (Story) => (<div style={{ width: '214px', display: 'flex', justifyContent: 'center' }}><Story /></div>)
   ],
};

export const Button_2: Story = {
   name: 'Primary Standart-2',
   args: {
      children: <LogoSVG />,
      iconSize: 16,
      onClick: (): void => console.log('Работа кнопки Primary Standart-2.')
   },
   parameters: {
      docs: {
         description: {
            story: 'Кнопка: иконка.',
         },
      },
   },
   decorators: [
      (Story) => (<div style={{ width: '214px', display: 'flex', justifyContent: 'center' }}><Story /></div>)
   ],
};

export const Button_3: Story = {
   name: 'Primary Standart-1 Radius-Def',
   args: {
      children: <LogoSVG />,
      text: 'Текст',
      iconSize: 16,
      radius: '_border_circle',
      onClick: (): void => console.log('Работа кнопки Primary Standart-1 Radius-Def.')
   },
   parameters: {
      docs: {
         description: {
            story: 'Скругление углов.',
         },
      },
   },
   decorators: [
      (Story) => (<div style={{ width: '214px', display: 'flex', justifyContent: 'center' }}><Story /></div>)
   ],
};

export const Button_4: Story = {
   name: 'Primary Standart-2 Radius-Circle',
   args: {
      children: <LogoSVG />,
      iconSize: 16,
      radius: '_border_circle',
      onClick: (): void => console.log('Работа кнопки Primary Standart-1 Radius-Circle.')
   },
   parameters: {
      docs: {
         description: {
            story: 'Скругление углов.',
         },
      },
   },
   decorators: [
      (Story) => (<div style={{ width: '214px', display: 'flex', justifyContent: 'center' }}><Story /></div>)
   ],
};

export const Button_5: Story = {
   name: 'Primary Standart-1 Bg-Def',
   args: {
      children: <LogoSVG />,
      text: 'Текст',
      iconSize: 16,
      bg: '_bg_transparent',
      onClick: (): void => console.log('Работа кнопки Primary Standart-1 Bg-Def.')
   },
   parameters: {
      docs: {
         description: {
            story: 'Без заднего фона.',
         },
      },
   },
   decorators: [
      (Story) => (<div style={{ width: '214px', display: 'flex', justifyContent: 'center' }}><Story /></div>)
   ],
};

export const Button_6: Story = {
   name: 'Primary Standart-2 Bg-Transparent',
   args: {
      children: <LogoSVG />,
      iconSize: 16,
      bg: '_bg_transparent',
      onClick: (): void => console.log('Работа кнопки Primary Standart-2 Bg-Transparent.')
   },
   parameters: {
      docs: {
         description: {
            story: 'Без заднего фона.',
         },
      },
   },
   decorators: [
      (Story) => (<div style={{ width: '214px', display: 'flex', justifyContent: 'center' }}><Story /></div>)
   ],
};

export const Button_Settings: Story = {
   name: 'Settings',
   args: {
      children: <SettingsSVG />,
      boxClass: 'button_settings',
      iconSize: 20,
      onClick: (): void => console.log('Работа кнопки Settings.')
   },
   parameters: {
      docs: {
         description: {
            story: 'Кнопка "настройки".',
         },
      },
   },
   decorators: [
      (Story) => (<div style={{ width: '214px', display: 'flex', justifyContent: 'center' }}><Story /></div>)
   ],
};

export const Button_Reliability: Story = {
   name: 'Reliability',
   args: {
      children: <ReliabilitySVG />,
      boxClass: 'button_reliability',
      text: 'Проверить',
      iconSize: 16,
      radius: '_border_circle',
      onClick: (): void => console.log('Работа кнопки Reliability.')
   },
   parameters: {
      docs: {
         description: {
            story: 'Кнопка для проверки безопасности пароля.',
         },
      },
   },
   decorators: [
      (Story) => (<div style={{ width: '214px', display: 'flex', justifyContent: 'center' }}><Story /></div>)
   ],
};

export const Main_Button: Story = {
   name: 'Main Button',
   args: {
      children: <RocketSVG />,
      boxClass: 'button_main',
      text: 'Генерация',
      iconSize: 16,
      onClick: (): void => console.log('Работа кнопки Main Button.')
   },
   parameters: {
      docs: {
         description: {
            story: 'Кнопка для генерации пароля.',
         },
      },
   },
   decorators: [
      (Story) => (<div style={{ width: '214px', display: 'flex', justifyContent: 'center' }}><Story /></div>)
   ],
};