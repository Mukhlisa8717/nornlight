import React from 'react'
import './Characteristic.scss'

const Characteristic = () => {
  return (
    <div className="characteristic">
      <h1 className="title">Характеристика</h1>
      <div className="characteristic__table">
        <div className="characteristic__table-item">
          <p>Цвет</p>
          <p className="characteristic__table-desc">Жёлтый</p>
        </div>
        <div className="characteristic__table-item table__item-bg">
          <p>Год</p>
          <p className="characteristic__table-desc">2016</p>
        </div>
        <div className="characteristic__table-item">
          <p>Диаметр колеса</p>
          <p className="characteristic__table-desc">27.5</p>
        </div>
        <div className="characteristic__table-item table__item-bg">
          <p>Материал рамы</p>
          <p className="characteristic__table-desc">Карбон</p>
        </div>
        <div className="characteristic__table-item">
          <p>Размер</p>
          <p className="characteristic__table-desc">L</p>
        </div>
        <div className="characteristic__table-item table__item-bg">
          <p>Страна</p>
          <p className="characteristic__table-desc">Швейцария</p>
        </div>
        <div className="characteristic__table-item">
          <p>Производитель</p>
          <p className="characteristic__table-desc">Scott</p>
        </div>
        <div className="characteristic__table-item table__item-bg table__item">
          <p>Покрышки</p>
          <p className="characteristic__table-desc">
            Schwalbe Rocket Ron EVO / 2.1 127EPI Kevlar Bead Tubeless Easy /
            PaceStar compound
          </p>
        </div>
        <div className="characteristic__table-item table__item">
          <p>Рама</p>
          <p className="characteristic__table-desc">
            Scale Carbon / HMX-технология / технология IMP / Коническая рулевая
            труба / BB92 / Технология SDS / Дропауты IDS SL
          </p>
        </div>
        <div className="characteristic__table-item table__item-bg table__item">
          <p>Подседельный Штырь</p>
          <p className="characteristic__table-desc">
            Ritchey WCS 700 Series: Carbon Link FlexLogic / 31.6mm 900 Series:
            Carbon 2B SDS / 34.9mm
          </p>
        </div>
        <div className="characteristic__table-item table__item">
          <p>Седло</p>
          <p className="characteristic__table-desc">
            Ritchey WCS Streem V3 Titanium rails
          </p>
        </div>
        <div className="characteristic__table-item table__item-bg table__item">
          <p>Вилка</p>
          <p className="characteristic__table-desc">
            Rock Shox SID RL3 Air / демпфер DNA3 3-режима / 15mm QR axle /
            коническая рулевая труба / Удалённая блокировка, регулировка отскока
            / ход 100mm
          </p>
        </div>
      </div>
    </div>
  );
}

export default Characteristic
