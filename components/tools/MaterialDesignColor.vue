<template>
  <div>
    <h1>Material Design Color</h1>
    <h2>说明</h2>
    <p>下面的颜色面板取自于Google材料设计语言，在没有设计师的时候，适合我们快速的为网站配色，<a href="https://material.io/guidelines/style/color.html#color-color-palette">官网地址</a>；</p>
    <p>调色板以一些基础色为基准，通过填充光谱来为Android、Web和iOS环境提供一套完整可用的颜色。基础色的饱和度是500。</p>
    <h2>使用技巧</h2>
    <h3>选择配色方案</h3>
    <p>限制颜色的数量，在众多基础色中选出三个色度以及一个强调色。强调色用于后背，可有可无。</p>
    <h3>为灰色的文字、图标和分隔线加上alpha值</h3>
    <p>为了有效地传达信息的视觉层次，应该使用深浅不同的文本。对于白色背景上的文字，标准alpha值为87%（#000000）。视觉层次偏低的次要文字，应该使用54%（＃000000）的alpha值。而像正文和标签中用于提示用户的文字，视觉层次更低，应该使用26%（#000000）的alpha值。</p>
    <p>其它元素，如图标和分隔线，也应该具有黑色的alpha值，而不是实心颜色，以确保他们能适应任何颜色的背景。</p>
    <p>对于彩色背景上白色或黑色文字，可以通过表格中的调色板找到合适的色彩对比度和alpha值。</p>
    <p>我们十分鼓励在UI中的大块区域内使用醒目的颜色。UI中不同的元素适合主题中不同的色彩。工具栏和大色块适合使用饱和度500的基础色，这也是你应用的主要颜色。状态栏适合使用更深一些的饱和度700的基础色。</p>
    <h3>强调色</h3>
    <p>鲜艳的强调色用于你的主要操作按钮以及组件，如开关或滑片。左对齐的部分图标或章节标题也可以使用强调色。</p>
    <h3>备用强调色</h3>
    <p>如果你的强调色相对于背景色太深或者太浅，默认的做法是选择一个更浅或者更深的备用颜色。如果你的强调色无法正常显示，那么在白色背景上会使用饱和度500的基础色。如果背景色就是饱和度500的基础色，那么会使用100%的白色或者54%的黑色。</p>
    <div class="demos">
      <img src="/tools/md-color-1.png">
      <img src="/tools/md-color-2.png">
      <img src="/tools/md-color-3.png">
      <img src="/tools/md-color-4.png">
      <img src="/tools/md-color-5.png">
      <img src="/tools/md-color-6.png">
      <img src="/tools/md-color-7.png">
    </div>
    <div class="color-palette">
      <section class="color-group">
        <ul>
          <li class="color main-color" style="background-color: #f44336;">
            <span class="name light-strong">Red</span>
            <span class="shade light-strong">500</span>
            <span class="hex light-strong">#f44336</span>
          </li>
          <li class="color dark" style="background-color: #ffebee;">
            <span class="shade expanded">50</span>
            <span class="hex">#ffebee</span>
          </li>
          <li class="color dark" style="background-color: #ffcdd2;">
            <span class="shade">100</span>
            <span class="hex">#ffcdd2</span>
          </li>
          <li class="color dark" style="background-color: #ef9a9a">
            <span class="shade expanded">200</span>
            <span class="hex">#ef9a9a</span>
          </li>
          <li class="color dark" style="background-color: #e57373;">
            <span class="shade">300</span>
            <span class="hex">#e57373</span>
          </li>
          <li class="color" style="background-color: #ef5350;">
            <span class="shade expanded">400</span>
            <span class="hex">#ef5350</span>
          </li>
          <li class="color" style="background-color: #f44336;">
            <span class="shade">500</span>
            <span class="hex">#f44336</span>
          </li>
          <li class="color" style="background-color: #e53935;">
            <span class="shade expanded">600</span>
            <span class="hex">#e53935</span>
          </li>
          <li class="color" style="background-color: #d32f2f;">
            <span class="shade">700</span>
            <span class="hex">#d32f2f</span>
          </li>
          <li class="color" style="background-color: #c62828;">
            <span class="shade expanded">800</span>
            <span class="hex">#c62828</span>
          </li>
          <li class="color" style="background-color: #b71c1c;">
            <span class="shade expanded">900</span>
            <span class="hex">#b71c1c</span>
          </li>
          <li class="color dark divide" style="background-color: #ff8a80;">
            <span class="shade accent">A100</span>
            <span class="hex">#ff8a80</span>
          </li>
          <li class="color light-strong" style="background-color: #ff5252;">
            <span class="shade accent expanded">A200</span>
            <span class="hex">#ff5252</span>
          </li>
          <li class="color" style="background-color: #ff1744;">
            <span class="shade accent expanded">A400</span>
            <span class="hex">#ff1744</span>
          </li>
          <li class="color" style="background-color: #d50000;">
            <span class="shade accent">A700</span>
            <span class="hex">#d50000</span>
          </li>
        </ul>
      </section>
      <section class="color-group">
        <ul>
          <li class="color main-color" style="background-color: #E91E63;">
            <span class="name light-strong">Pink</span>
            <span class="shade light-strong">500</span>
            <span class="hex light-strong">#e91e63</span>
          </li>
          <li class="color dark" style="background-color: #fce4ec;">
            <span class="shade expanded">50</span>
            <span class="hex">#fce4ec</span>
          </li>
          <li class="color dark" style="background-color: #f8bbd0;">
            <span class="shade">100</span>
            <span class="hex">#f8bbd0</span>
          </li>
          <li class="color dark" style="background-color: #f48fb1;">
            <span class="shade expanded">200</span>
            <span class="hex">#f48fb1</span>
          </li>
          <li class="color light-strong" style="background-color: #f06292;">
            <span class="shade">300</span>
            <span class="hex">#f06292</span>
          </li>
          <li class="color " style="background-color: #ec407a;">
            <span class="shade expanded">400</span>
            <span class="hex">#ec407a</span>
          </li>
          <li class="color" style="background-color: #e91e63;">
            <span class="shade">500</span>
            <span class="hex">#e91e63</span>
          </li>
          <li class="color" style="background-color: #d81b60;">
            <span class="shade expanded">600</span>
            <span class="hex">#d81b60</span>
          </li>
          <li class="color" style="background-color: #c2185b;">
            <span class="shade">700</span>
            <span class="hex">#c2185b</span>
          </li>
          <li class="color" style="background-color: #ad1457;">
            <span class="shade">800</span>
            <span class="hex">#ad1457</span>
          </li>
          <li class="color" style="background-color: #880e4f;">
            <span class="shade">900</span>
            <span class="hex">#880e4f</span>
          </li>
          <li class="color dark divide" style="background-color: #ff80ab;">
            <span class="shade accent">A100</span>
            <span class="hex">#ff80ab</span>
          </li>
          <li class="color light-strong" style="background-color: #ff4081;">
            <span class="shade accent expanded">A200</span>
            <span class="hex">#ff4081</span>
          </li>
          <li class="color" style="background-color: #f50057;">
            <span class="shade accent expanded">A400</span>
            <span class="hex">#f50057</span>
          </li>
          <li class="color" style="background-color: #c51162;">
            <span class="shade accent">A700</span>
            <span class="hex">#c51162</span>
          </li>
        </ul>
      </section>
      <section class="color-group">
        <ul>
          <li class="color main-color" style="background-color: #9c27b0;">
            <span class="name">Purple</span>
            <span class="shade">500</span>
            <span class="hex">#9c27b0</span>
          </li>
          <li class="color dark" style="background-color: #f3e5f5;">
            <span class="shade expanded">50</span>
            <span class="hex">#f3e5f5</span>
          </li>
          <li class="color dark" style="background-color: #e1bee7;">
            <span class="shade">100</span>
            <span class="hex">#e1bee7</span>
          </li>
          <li class="color dark" style="background-color: #ce93d8;">
            <span class="shade expanded">200</span>
            <span class="hex">#ce93d8</span>
          </li>
          <li class="color light-strong" style="background-color: #ba68c8;">
            <span class="shade">300</span>
            <span class="hex">#ba68c8</span>
          </li>
          <li class="color light-strong" style="background-color: #ab47bc;">
            <span class="shade expanded">400</span>
            <span class="hex">#ab47bc</span>
          </li>
          <li class="color" style="background-color: #9c27b0;">
            <span class="shade">500</span>
            <span class="hex">#9c27b0</span>
          </li>
          <li class="color" style="background-color: #8e24aa;">
            <span class="shade expanded">600</span>
            <span class="hex">#8e24aa</span>
          </li>
          <li class="color" style="background-color: #7b1fa2;">
            <span class="shade">700</span>
            <span class="hex">#7b1fa2</span>
          </li>
          <li class="color" style="background-color: #6a1b9a;">
            <span class="shade expanded">800</span>
            <span class="hex">#6a1b9a</span>
          </li>
          <li class="color" style="background-color: #4a148c;">
            <span class="shade expanded">900</span>
            <span class="hex">#4a148c</span>
          </li>
          <li class="color dark divide" style="background-color: #ea80fc;">
            <span class="shade accent">A100</span>
            <span class="hex">#ea80fc</span>
          </li>
          <li class="color light-strong" style="background-color: #e040fb;">
            <span class="shade accent expanded">A200</span>
            <span class="hex">#e040fb</span>
          </li>
          <li class="color" style="background-color: #d500f9;">
            <span class="shade accent expanded">A400</span>
            <span class="hex">#d500f9</span>
          </li>
          <li class="color" style="background-color: #aa00ff;">
            <span class="shade accent">A700</span>
            <span class="hex">#aa00ff</span>
          </li>
        </ul>
      </section>
      <section class="color-group">
        <ul>
          <li class="color main-color" style="background-color: #673ab7;">
            <span class="name">Deep Purple</span>
            <span class="shade">500</span>
            <span class="hex">#673ab7</span>
          </li>
          <li class="color dark" style="background-color: #ede7f6;">
            <span class="shade expanded">50</span>
            <span class="hex">#ede7f6</span>
          </li>
          <li class="color dark" style="background-color: #d1c4e9;">
            <span class="shade">100</span>
            <span class="hex">#d1c4e9</span>
          </li>
          <li class="color dark" style="background-color: #b39ddb;">
            <span class="shade expanded">200</span>
            <span class="hex">#b39ddb</span>
          </li>
          <li class="color" style="background-color: #9575cd;">
            <span class="shade">300</span>
            <span class="hex">#9575cd</span>
          </li>
          <li class="color" style="background-color: #7e57c2;">
            <span class="shade expanded">400</span>
            <span class="hex">#7e57c2</span>
          </li>
          <li class="color" style="background-color: #673ab7;">
            <span class="shade">500</span>
            <span class="hex">#673ab7</span>
          </li>
          <li class="color" style="background-color: #5e35b1;">
            <span class="shade expanded">600</span>
            <span class="hex">#5e35b1</span>
          </li>
          <li class="color" style="background-color: #512da8;">
            <span class="shade">700</span>
            <span class="hex">#512da8</span>
          </li>
          <li class="color" style="background-color: #4527a0;">
            <span class="shade expanded">800</span>
            <span class="hex">#4527a0</span>
          </li>
          <li class="color" style="background-color: #311b92;">
            <span class="shade expanded">900</span>
            <span class="hex">#311b92</span>
          </li>
          <li class="color dark divide" style="background-color: #b388ff;">
            <span class="shade accent">A100</span>
            <span class="hex">#b388ff</span>
          </li>
          <li class="color light-strong" style="background-color: #7c4dff;">
            <span class="shade accent expanded">A200</span>
            <span class="hex">#7c4dff</span>
          </li>
          <li class="color" style="background-color: #651fff;">
            <span class="shade accent expanded">A400</span>
            <span class="hex">#651fff</span>
          </li>
          <li class="color" style="background-color: #6200ea;">
            <span class="shade accent">A700</span>
            <span class="hex">#6200ea</span>
          </li>
        </ul>
      </section>
      <section class="color-group">
        <ul>
          <li class="color main-color" style="background-color: #3f51b5;">
            <span class="name">Indigo</span>
            <span class="shade">500</span>
            <span class="hex">#3f51b5</span>
          </li>
          <li class="color dark" style="background-color: #e8eaf6;">
            <span class="shade expanded">50</span>
            <span class="hex">#e8eaf6</span>
          </li>
          <li class="color dark" style="background-color: #c5cae9;">
            <span class="shade">100</span>
            <span class="hex">#c5cae9</span>
          </li>
          <li class="color dark" style="background-color: #9fa8da;">
            <span class="shade expanded">200</span>
            <span class="hex">#9fa8da</span>
          </li>
          <li class="color" style="background-color: #7986cb;">
            <span class="shade">300</span>
            <span class="hex">#7986cb</span>
          </li>
          <li class="color" style="background-color: #5c6bc0;">
            <span class="shade expanded">400</span>
            <span class="hex">#5c6bc0</span>
          </li>
          <li class="color" style="background-color: #3f51b5;">
            <span class="shade">500</span>
            <span class="hex">#3f51b5</span>
          </li>
          <li class="color" style="background-color: #3949ab;">
            <span class="shade expanded">600</span>
            <span class="hex">#3949ab</span>
          </li>
          <li class="color" style="background-color: #303f9f;">
            <span class="shade">700</span>
            <span class="hex">#303f9f</span>
          </li>
          <li class="color" style="background-color: #283593;">
            <span class="shade expanded">800</span>
            <span class="hex">#283593</span>
          </li>
          <li class="color" style="background-color: #1a237e;">
            <span class="shade expanded">900</span>
            <span class="hex">#1a237e</span>
          </li>
          <li class="color dark divide" style="background-color: #8c9eff;">
            <span class="shade accent">A100</span>
            <span class="hex">#8c9eff</span>
          </li>
          <li class="color" style="background-color: #536dfe;">
            <span class="shade accent expanded">A200</span>
            <span class="hex">#536dfe</span>
          </li>
          <li class="color" style="background-color: #3d5afe;">
            <span class="shade accent expanded">A400</span>
            <span class="hex">#3d5afe</span>
          </li>
          <li class="color" style="background-color: #304ffe;">
            <span class="shade accent">A700</span>
            <span class="hex">#304ffe</span>
          </li>
        </ul>
      </section>
      <section class="color-group">
        <ul>
          <li class="color main-color" style="background-color: #2196F3;">
            <span class="name light-strong">Blue</span>
            <span class="shade light-strong">500</span>
            <span class="hex light-strong">#2196f3</span>
          </li>
          <li class="color dark" style="background-color: #e3f2fd;">
            <span class="shade expanded">50</span>
            <span class="hex">#e3f2fd</span>
          </li>
          <li class="color dark" style="background-color: #bbdefb;">
            <span class="shade">100</span>
            <span class="hex">#bbdefb</span>
          </li>
          <li class="color dark" style="background-color: #90caf9;">
            <span class="shade expanded">200</span>
            <span class="hex">#90caf9</span>
          </li>
          <li class="color dark" style="background-color: #64b5f6;">
            <span class="shade">300</span>
            <span class="hex">#64b5f6</span>
          </li>
          <li class="color dark" style="background-color: #42a5f5;">
            <span class="shade expanded">400</span>
            <span class="hex">#42a5f5</span>
          </li>
          <li class="color light-strong" style="background-color: #2196f3;">
            <span class="shade">500</span>
            <span class="hex">#2196f3</span>
          </li>
          <li class="color" style="background-color: #1e88e5;">
            <span class="shade expanded">600</span>
            <span class="hex">#1e88e5</span>
          </li>
          <li class="color" style="background-color: #1976d2;">
            <span class="shade">700</span>
            <span class="hex">#1976d2</span>
          </li>
          <li class="color" style="background-color: #1565c0;">
            <span class="shade expanded">800</span>
            <span class="hex">#1565c0</span>
          </li>
          <li class="color" style="background-color: #0d47a1;">
            <span class="shade expanded">900</span>
            <span class="hex">#0d47a1</span>
          </li>
          <li class="color dark divide" style="background-color: #82b1ff;">
            <span class="shade accent">A100</span>
            <span class="hex">#82b1ff</span>
          </li>
          <li class="color light-strong" style="background-color: #448aff;">
            <span class="shade accent expanded">A200</span>
            <span class="hex">#448aff</span>
          </li>
          <li class="color" style="background-color: #2979ff;">
            <span class="shade accent expanded">A400</span>
            <span class="hex">#2979ff</span>
          </li>
          <li class="color" style="background-color: #2962ff;">
            <span class="shade accent">A700</span>
            <span class="hex">#2962ff</span>
          </li>
        </ul>
      </section>
      <section class="color-group">
        <ul>
          <li class="color main-color" style="background-color: #03a9f4;">
            <span class="name dark">Light Blue</span>
            <span class="shade dark">500</span>
            <span class="hex dark">#03a9f4</span>
          </li>
          <li class="color dark" style="background-color: #e1f5fe;">
            <span class="shade expanded">50</span>
            <span class="hex">#e1f5fe</span>
          </li>
          <li class="color dark" style="background-color: #b3e5fc;">
            <span class="shade">100</span>
            <span class="hex">#b3e5fc</span>
          </li>
          <li class="color dark" style="background-color: #81d4fa;">
            <span class="shade expanded">200</span>
            <span class="hex">#81d4fa</span>
          </li>
          <li class="color dark" style="background-color: #4fc3f7;">
            <span class="shade">300</span>
            <span class="hex">#4fc3f7</span>
          </li>
          <li class="color dark" style="background-color: #29b6f6;">
            <span class="shade expanded">400</span>
            <span class="hex">#29b6f6</span>
          </li>
          <li class="color dark" style="background-color: #03a9f4;">
            <span class="shade">500</span>
            <span class="hex">#03a9f4</span>
          </li>
          <li class="color light-strong" style="background-color: #039be5;">
            <span class="shade expanded">600</span>
            <span class="hex">#039be5</span>
          </li>
          <li class="color" style="background-color: #0288d1;">
            <span class="shade">700</span>
            <span class="hex">#0288d1</span>
          </li>
          <li class="color" style="background-color: #0277bd;">
            <span class="shade expanded">800</span>
            <span class="hex">#0277bd</span>
          </li>
          <li class="color" style="background-color: #01579b;">
            <span class="shade expanded">900</span>
            <span class="hex">#01579b</span>
          </li>
          <li class="color dark divide" style="background-color: #80d8ff;">
            <span class="shade accent">A100</span>
            <span class="hex">#80d8ff</span>
          </li>
          <li class="color dark" style="background-color: #40c4ff;">
            <span class="shade accent expanded">A200</span>
            <span class="hex">#40c4ff</span>
          </li>
          <li class="color dark" style="background-color: #00b0ff;">
            <span class="shade accent expanded">A400</span>
            <span class="hex">#00b0ff</span>
          </li>
          <li class="color light-strong" style="background-color: #0091ea;">
            <span class="shade accent">A700</span>
            <span class="hex">#0091ea</span>
          </li>
        </ul>
      </section>
      <section class="color-group">
        <ul>
          <li class="color main-color" style="background-color: #00bcd4;">
            <span class="name dark">Cyan</span>
            <span class="shade dark">500</span>
            <span class="hex dark">#00bcd4</span>
          </li>
          <li class="color dark" style="background-color: #e0f7fa;">
            <span class="shade expanded">50</span>
            <span class="hex">#e0f7fa</span>
          </li>
          <li class="color dark" style="background-color: #b2ebf2;">
            <span class="shade">100</span>
            <span class="hex">#b2ebf2</span>
          </li>
          <li class="color dark" style="background-color: #80deea;">
            <span class="shade expanded">200</span>
            <span class="hex">#80deea</span>
          </li>
          <li class="color dark" style="background-color: #4dd0e1;">
            <span class="shade">300</span>
            <span class="hex">#4dd0e1</span>
          </li>
          <li class="color dark" style="background-color: #26c6da;">
            <span class="shade expanded">400</span>
            <span class="hex">#26c6da</span>
          </li>
          <li class="color dark" style="background-color: #00bcd4;">
            <span class="shade">500</span>
            <span class="hex">#00bcd4</span>
          </li>
          <li class="color dark" style="background-color: #00acc1;">
            <span class="shade expanded">600</span>
            <span class="hex">#00acc1</span>
          </li>
          <li class="color" style="background-color: #0097a7;">
            <span class="shade">700</span>
            <span class="hex">#0097a7</span>
          </li>
          <li class="color" style="background-color: #00838f;">
            <span class="shade expanded">800</span>
            <span class="hex">#00838f</span>
          </li>
          <li class="color" style="background-color: #006064;">
            <span class="shade expanded">900</span>
            <span class="hex">#006064</span>
          </li>
          <li class="color dark divide" style="background-color: #84ffff;">
            <span class="shade accent">A100</span>
            <span class="hex">#84ffff</span>
          </li>
          <li class="color dark" style="background-color: #18ffff;">
            <span class="shade accent expanded">A200</span>
            <span class="hex">#18ffff</span>
          </li>
          <li class="color dark" style="background-color: #00e5ff;">
            <span class="shade accent expanded">A400</span>
            <span class="hex">#00e5ff</span>
          </li>
          <li class="color dark" style="background-color: #00b8d4;">
            <span class="shade accent">A700</span>
            <span class="hex">#00b8d4</span>
          </li>
        </ul>
      </section>
      <section class="color-group">
        <ul>
          <li class="color main-color" style="background-color: #009688;">
            <span class="name light-strong">Teal</span>
            <span class="shade light-strong">500</span>
            <span class="hex light-strong">#009688</span>
          </li>
          <li class="color dark" style="background-color: #e0f2f1;">
            <span class="shade expanded">50</span>
            <span class="hex">#e0f2f1</span>
          </li>
          <li class="color dark" style="background-color: #b2dfdb;">
            <span class="shade">100</span>
            <span class="hex">#b2dfdb</span>
          </li>
          <li class="color dark" style="background-color: #80cbc4;">
            <span class="shade expanded">200</span>
            <span class="hex">#80cbc4</span>
          </li>
          <li class="color dark" style="background-color: #4db6ac;">
            <span class="shade">300</span>
            <span class="hex">#4db6ac</span>
          </li>
          <li class="color dark" style="background-color: #26a69a;">
            <span class="shade expanded">400</span>
            <span class="hex">#26a69a</span>
          </li>
          <li class="color light-strong" style="background-color: #009688;">
            <span class="shade">500</span>
            <span class="hex">#009688</span>
          </li>
          <li class="color light-strong" style="background-color: #00897b;">
            <span class="shade expanded">600</span>
            <span class="hex">#00897b</span>
          </li>
          <li class="color light-strong" style="background-color: #00796b;">
            <span class="shade">700</span>
            <span class="hex">#00796b</span>
          </li>
          <li class="color" style="background-color: #00695c;">
            <span class="shade expanded">800</span>
            <span class="hex">#00695c</span>
          </li>
          <li class="color" style="background-color: #004d40;">
            <span class="shade expanded">900</span>
            <span class="hex">#004d40</span>
          </li>
          <li class="color dark divide" style="background-color: #a7ffeb;">
            <span class="shade accent">A100</span>
            <span class="hex">#a7ffeb</span>
          </li>
          <li class="color dark" style="background-color: #64ffda;">
            <span class="shade accent expanded">A200</span>
            <span class="hex">#64ffda</span>
          </li>
          <li class="color dark" style="background-color: #1de9b6;">
            <span class="shade accent expanded">A400</span>
            <span class="hex">#1de9b6</span>
          </li>
          <li class="color dark" style="background-color: #00bfa5;">
            <span class="shade accent">A700</span>
            <span class="hex">#00bfa5</span>
          </li>
        </ul>
      </section>
      <section class="color-group">
        <ul>
          <li class="color main-color" style="background-color: #4caf50;">
            <span class="name dark">Green</span>
            <span class="shade dark">500</span>
            <span class="hex dark">#4caf50</span>
          </li>
          <li class="color dark" style="background-color: #e8f5e9;">
            <span class="shade expanded">50</span>
            <span class="hex">#e8f5e9</span>
          </li>
          <li class="color dark" style="background-color: #c8e6c9;">
            <span class="shade">100</span>
            <span class="hex">#c8e6c9</span>
          </li>
          <li class="color dark" style="background-color: #a5d6a7;">
            <span class="shade expanded">200</span>
            <span class="hex">#a5d6a7</span>
          </li>
          <li class="color dark" style="background-color: #81c784;">
            <span class="shade">300</span>
            <span class="hex">#81c784</span>
          </li>
          <li class="color dark" style="background-color: #66bb6a;">
            <span class="shade expanded">400</span>
            <span class="hex">#66bb6a</span>
          </li>
          <li class="color dark" style="background-color: #4caf50;">
            <span class="shade">500</span>
            <span class="hex">#4caf50</span>
          </li>
          <li class="color light-strong" style="background-color: #43a047;">
            <span class="shade expanded">600</span>
            <span class="hex">#43a047</span>
          </li>
          <li class="color" style="background-color: #388e3c;">
            <span class="shade">700</span>
            <span class="hex">#388e3c</span>
          </li>
          <li class="color" style="background-color: #2e7d32;">
            <span class="shade expanded">800</span>
            <span class="hex">#2e7d32</span>
          </li>
          <li class="color" style="background-color: #1b5e20;">
            <span class="shade expanded">900</span>
            <span class="hex">#1b5e20</span>
          </li>
          <li class="color dark divide" style="background-color: #b9f6ca;">
            <span class="shade accent">A100</span>
            <span class="hex">#b9f6ca</span>
          </li>
          <li class="color dark" style="background-color: #69f0ae;">
            <span class="shade accent expanded">A200</span>
            <span class="hex">#69f0ae</span>
          </li>
          <li class="color dark" style="background-color: #00e676;">
            <span class="shade accent expanded">A400</span>
            <span class="hex">#00e676</span>
          </li>
          <li class="color dark" style="background-color: #00c853;">
            <span class="shade accent">A700</span>
            <span class="hex">#00c853</span>
          </li>
        </ul>
      </section>
      <section class="color-group">
        <ul>
          <li class="color main-color" style="background-color: #8bc34a;">
            <span class="name dark">Light Green</span>
            <span class="shade dark">500</span>
            <span class="hex dark">#8bc34a</span>
          </li>
          <li class="color dark" style="background-color: #f1f8e9;">
            <span class="shade expanded">50</span>
            <span class="hex">#f1f8e9</span>
          </li>
          <li class="color dark" style="background-color: #dcedc8;">
            <span class="shade">100</span>
            <span class="hex">#dcedc8</span>
          </li>
          <li class="color dark" style="background-color: #c5e1a5;">
            <span class="shade expanded">200</span>
            <span class="hex">#c5e1a5</span>
          </li>
          <li class="color dark" style="background-color: #aed581;">
            <span class="shade">300</span>
            <span class="hex">#aed581</span>
          </li>
          <li class="color dark" style="background-color: #9ccc65;">
            <span class="shade expanded">400</span>
            <span class="hex">#9ccc65</span>
          </li>
          <li class="color dark" style="background-color: #8bc34a;">
            <span class="shade">500</span>
            <span class="hex">#8bc34a</span>
          </li>
          <li class="color dark" style="background-color: #7cb342;">
            <span class="shade expanded">600</span>
            <span class="hex">#7cb342</span>
          </li>
          <li class="color light-strong" style="background-color: #689f38;">
            <span class="shade">700</span>
            <span class="hex">#689f38</span>
          </li>
          <li class="color" style="background-color: #558b2f;">
            <span class="shade expanded">800</span>
            <span class="hex">#558b2f</span>
          </li>
          <li class="color" style="background-color: #33691e;">
            <span class="shade expanded">900</span>
            <span class="hex">#33691e</span>
          </li>
          <li class="color dark divide" style="background-color: #ccff90;">
            <span class="shade accent">A100</span>
            <span class="hex">#ccff90</span>
          </li>
          <li class="color dark" style="background-color: #b2ff59;">
            <span class="shade accent expanded">A200</span>
            <span class="hex">#b2ff59</span>
          </li>
          <li class="color dark" style="background-color: #76ff03;">
            <span class="shade accent expanded">A400</span>
            <span class="hex">#76ff03</span>
          </li>
          <li class="color dark" style="background-color: #64dd17;">
            <span class="shade accent">A700</span>
            <span class="hex">#64dd17</span>
          </li>
        </ul>
      </section>
      <section class="color-group">
        <ul>
          <li class="color main-color" style="background-color: #cddc39;">
            <span class="name dark">Lime</span>
            <span class="shade dark">500</span>
            <span class="hex dark">#cddc39</span>
          </li>
          <li class="color dark" style="background-color: #f9fbe7;">
            <span class="shade expanded">50</span>
            <span class="hex">#f9fbe7</span>
          </li>
          <li class="color dark" style="background-color: #f0f4c3;">
            <span class="shade">100</span>
            <span class="hex">#f0f4c3</span>
          </li>
          <li class="color dark" style="background-color: #e6ee9c;">
            <span class="shade expanded">200</span>
            <span class="hex">#e6ee9c</span>
          </li>
          <li class="color dark" style="background-color: #dce775;">
            <span class="shade">300</span>
            <span class="hex">#dce775</span>
          </li>
          <li class="color dark" style="background-color: #d4e157;">
            <span class="shade expanded">400</span>
            <span class="hex">#d4e157</span>
          </li>
          <li class="color dark" style="background-color: #cddc39;">
            <span class="shade">500</span>
            <span class="hex">#cddc39</span>
          </li>
          <li class="color dark" style="background-color: #c0ca33;">
            <span class="shade expanded">600</span>
            <span class="hex">#c0ca33</span>
          </li>
          <li class="color dark" style="background-color: #afb42b;">
            <span class="shade">700</span>
            <span class="hex">#afb42b</span>
          </li>
          <li class="color dark" style="background-color: #9e9d24;">
            <span class="shade expanded">800</span>
            <span class="hex">#9e9d24</span>
          </li>
          <li class="color" style="background-color: #827717;">
            <span class="shade expanded">900</span>
            <span class="hex">#827717</span>
          </li>
          <li class="color dark divide" style="background-color: #f4ff81;">
            <span class="shade accent">A100</span>
            <span class="hex">#f4ff81</span>
          </li>
          <li class="color dark" style="background-color: #eeff41;">
            <span class="shade accent expanded">A200</span>
            <span class="hex">#eeff41</span>
          </li>
          <li class="color dark" style="background-color: #c6ff00;">
            <span class="shade accent expanded">A400</span>
            <span class="hex">#c6ff00</span>
          </li>
          <li class="color dark" style="background-color: #aeea00;">
            <span class="shade accent">A700</span>
            <span class="hex">#aeea00</span>
          </li>
        </ul>
      </section>
      <section class="color-group">
        <ul>
          <li class="color main-color" style="background-color: #ffeb3b;">
            <span class="name dark">Yellow</span>
            <span class="shade dark">500</span>
            <span class="hex dark">#ffeb3b</span>
          </li>
          <li class="color dark" style="background-color: #fffde7;">
            <span class="shade expanded">50</span>
            <span class="hex">#fffde7</span>
          </li>
          <li class="color dark" style="background-color: #fff9c4;">
            <span class="shade">100</span>
            <span class="hex">#fff9c4</span>
          </li>
          <li class="color dark" style="background-color: #fff59d;">
            <span class="shade expanded">200</span>
            <span class="hex">#fff59d</span>
          </li>
          <li class="color dark" style="background-color: #fff176;">
            <span class="shade">300</span>
            <span class="hex">#fff176</span>
          </li>
          <li class="color dark" style="background-color: #ffee58;">
            <span class="shade expanded">400</span>
            <span class="hex">#ffee58</span>
          </li>
          <li class="color dark" style="background-color: #ffeb3b;">
            <span class="shade">500</span>
            <span class="hex">#ffeb3b</span>
          </li>
          <li class="color dark" style="background-color: #fdd835;">
            <span class="shade expanded">600</span>
            <span class="hex">#fdd835</span>
          </li>
          <li class="color dark" style="background-color: #fbc02d;">
            <span class="shade">700</span>
            <span class="hex">#fbc02d</span>
          </li>
          <li class="color dark" style="background-color: #f9a825;">
            <span class="shade expanded">800</span>
            <span class="hex">#f9a825</span>
          </li>
          <li class="color dark" style="background-color: #f57f17;">
            <span class="shade expanded">900</span>
            <span class="hex">#f57f17</span>
          </li>
          <li class="color dark divide" style="background-color: #ffff8d;">
            <span class="shade accent">A100</span>
            <span class="hex">#ffff8d</span>
          </li>
          <li class="color dark" style="background-color: #ffff00;">
            <span class="shade accent expanded">A200</span>
            <span class="hex">#ffff00</span>
          </li>
          <li class="color dark" style="background-color: #ffea00;">
            <span class="shade accent expanded">A400</span>
            <span class="hex">#ffea00</span>
          </li>
          <li class="color dark" style="background-color: #ffd600;">
            <span class="shade accent">A700</span>
            <span class="hex">#ffd600</span>
          </li>
        </ul>
      </section>
      <section class="color-group">
        <ul>
          <li class="color main-color" style="background-color: #ffc107;">
            <span class="name dark">Amber</span>
            <span class="shade dark">500</span>
            <span class="hex dark">#ffc107</span>
          </li>
          <li class="color dark" style="background-color: #fff8e1;">
            <span class="shade expanded">50</span>
            <span class="hex">#fff8e1</span>
          </li>
          <li class="color dark" style="background-color: #ffecb3;">
            <span class="shade">100</span>
            <span class="hex">#ffecb3</span>
          </li>
          <li class="color dark" style="background-color: #ffe082;">
            <span class="shade expanded">200</span>
            <span class="hex">#ffe082</span>
          </li>
          <li class="color dark" style="background-color: #ffd54f;">
            <span class="shade">300</span>
            <span class="hex">#ffd54f</span>
          </li>
          <li class="color dark" style="background-color: #ffca28;">
            <span class="shade expanded">400</span>
            <span class="hex">#ffca28</span>
          </li>
          <li class="color dark" style="background-color: #ffc107;">
            <span class="shade">500</span>
            <span class="hex">#ffc107</span>
          </li>
          <li class="color dark" style="background-color: #ffb300;">
            <span class="shade expanded">600</span>
            <span class="hex">#ffb300</span>
          </li>
          <li class="color dark" style="background-color: #ffa000;">
            <span class="shade">700</span>
            <span class="hex">#ffa000</span>
          </li>
          <li class="color dark" style="background-color: #ff8f00;">
            <span class="shade expanded">800</span>
            <span class="hex">#ff8f00</span>
          </li>
          <li class="color dark" style="background-color: #ff6f00;">
            <span class="shade expanded">900</span>
            <span class="hex">#ff6f00</span>
          </li>
          <li class="color dark divide" style="background-color: #ffe57f;">
            <span class="shade accent">A100</span>
            <span class="hex">#ffe57f</span>
          </li>
          <li class="color dark" style="background-color: #ffd740;">
            <span class="shade accent expanded">A200</span>
            <span class="hex">#ffd740</span>
          </li>
          <li class="color dark" style="background-color: #ffc400;">
            <span class="shade accent expanded">A400</span>
            <span class="hex">#ffc400</span>
          </li>
          <li class="color dark" style="background-color: #ffab00;">
            <span class="shade accent">A700</span>
            <span class="hex">#ffab00</span>
          </li>
        </ul>
      </section>
      <section class="color-group">
        <ul>
          <li class="color main-color" style="background-color: #ff9800;">
            <span class="name dark-when-small">Orange</span>
            <span class="shade dark-when-small">500</span>
            <span class="hex dark-when-small">#ff9800</span>
          </li>
          <li class="color dark" style="background-color: #fff3e0;">
            <span class="shade expanded">50</span>
            <span class="hex">#fff3e0</span>
          </li>
          <li class="color dark" style="background-color: #ffe0b2;">
            <span class="shade">100</span>
            <span class="hex">#ffe0b2</span>
          </li>
          <li class="color dark" style="background-color: #ffcc80;">
            <span class="shade expanded">200</span>
            <span class="hex">#ffcc80</span>
          </li>
          <li class="color dark" style="background-color: #ffb74d;">
            <span class="shade">300</span>
            <span class="hex">#ffb74d</span>
          </li>
          <li class="color dark" style="background-color: #ffa726;">
            <span class="shade expanded">400</span>
            <span class="hex">#ffa726</span>
          </li>
          <li class="color dark" style="background-color: #ff9800;">
            <span class="shade">500</span>
            <span class="hex">#ff9800</span>
          </li>
          <li class="color dark" style="background-color: #fb8c00;">
            <span class="shade expanded">600</span>
            <span class="hex">#fb8c00</span>
          </li>
          <li class="color dark" style="background-color: #f57c00;">
            <span class="shade">700</span>
            <span class="hex">#f57c00</span>
          </li>
          <li class="color light-strong" style="background-color: #ef6c00;">
            <span class="shade expanded">800</span>
            <span class="hex">#ef6c00</span>
          </li>
          <li class="color" style="background-color: #e65100;">
            <span class="shade expanded">900</span>
            <span class="hex">#e65100</span>
          </li>
          <li class="color dark divide" style="background-color: #ffd180;">
            <span class="shade accent">A100</span>
            <span class="hex">#ffd180</span>
          </li>
          <li class="color dark" style="background-color: #ffab40;">
            <span class="shade accent expanded">A200</span>
            <span class="hex">#ffab40</span>
          </li>
          <li class="color dark" style="background-color: #ff9100;">
            <span class="shade accent expanded">A400</span>
            <span class="hex">#ff9100</span>
          </li>
          <li class="color dark" style="background-color: #ff6d00;">
            <span class="shade accent">A700</span>
            <span class="hex">#ff6d00</span>
          </li>
        </ul>
      </section>
      <section class="color-group">
        <ul>
          <li class="color main-color" style="background-color: #ff5722;">
            <span class="name light-strong">Deep Orange</span>
            <span class="shade light-strong">500</span>
            <span class="hex light-strong">#ff5722</span>
          </li>
          <li class="color dark" style="background-color: #fbe9e7;">
            <span class="shade expanded">50</span>
            <span class="hex">#fbe9e7</span>
          </li>
          <li class="color dark" style="background-color: #ffccbc;">
            <span class="shade">100</span>
            <span class="hex">#ffccbc</span>
          </li>
          <li class="color dark" style="background-color: #ffab91;">
            <span class="shade expanded">200</span>
            <span class="hex">#ffab91</span>
          </li>
          <li class="color dark" style="background-color: #ff8a65;">
            <span class="shade">300</span>
            <span class="hex">#ff8a65</span>
          </li>
          <li class="color dark" style="background-color: #ff7043;">
            <span class="shade expanded">400</span>
            <span class="hex">#ff7043</span>
          </li>
          <li class="color light-strong" style="background-color: #ff5722;">
            <span class="shade">500</span>
            <span class="hex">#ff5722</span>
          </li>
          <li class="color" style="background-color: #f4511e;">
            <span class="shade expanded">600</span>
            <span class="hex">#f4511e</span>
          </li>
          <li class="color" style="background-color: #e64a19;">
            <span class="shade">700</span>
            <span class="hex">#e64a19</span>
          </li>
          <li class="color" style="background-color: #d84315;">
            <span class="shade expanded">800</span>
            <span class="hex">#d84315</span>
          </li>
          <li class="color" style="background-color: #bf360c;">
            <span class="shade expanded">900</span>
            <span class="hex">#bf360c</span>
          </li>
          <li class="color dark divide" style="background-color: #ff9e80;">
            <span class="shade accent">A100</span>
            <span class="hex">#ff9e80</span>
          </li>
          <li class="color dark" style="background-color: #ff6e40;">
            <span class="shade accent expanded">A200</span>
            <span class="hex">#ff6e40</span>
          </li>
          <li class="color" style="background-color: #ff3d00;">
            <span class="shade accent expanded">A400</span>
            <span class="hex">#ff3d00</span>
          </li>
          <li class="color" style="background-color: #dd2c00;">
            <span class="shade accent">A700</span>
            <span class="hex">#dd2c00</span>
          </li>
        </ul>
      </section>
      <section class="color-group">
        <ul>
          <li class="color main-color" style="background-color: #795548;">
            <span class="name">Brown</span>
            <span class="shade">500</span>
            <span class="hex">#795548</span>
          </li>
          <li class="color dark" style="background-color: #efebe9;">
            <span class="shade expanded">50</span>
            <span class="hex">#efebe9</span>
          </li>
          <li class="color dark" style="background-color: #d7ccc8;">
            <span class="shade">100</span>
            <span class="hex">#d7ccc8</span>
          </li>
          <li class="color dark" style="background-color: #bcaaa4;">
            <span class="shade expanded">200</span>
            <span class="hex">#bcaaa4</span>
          </li>
          <li class="color light-strong" style="background-color: #a1887f;">
            <span class="shade">300</span>
            <span class="hex">#a1887f</span>
          </li>
          <li class="color" style="background-color: #8d6e63;">
            <span class="shade expanded">400</span>
            <span class="hex">#8d6e63</span>
          </li>
          <li class="color" style="background-color: #795548;">
            <span class="shade">500</span>
            <span class="hex">#795548</span>
          </li>
          <li class="color" style="background-color: #6d4c41;">
            <span class="shade expanded">600</span>
            <span class="hex">#6d4c41</span>
          </li>
          <li class="color" style="background-color: #5d4037;">
            <span class="shade">700</span>
            <span class="hex">#5d4037</span>
          </li>
          <li class="color" style="background-color: #4e342e;">
            <span class="shade expanded">800</span>
            <span class="hex">#4e342e</span>
          </li>
          <li class="color" style="background-color: #3e2723;">
            <span class="shade expanded">900</span>
            <span class="hex">#3e2723</span>
          </li>
        </ul>
      </section>
      <section class="color-group">
        <ul>
          <li class="color main-color" style="background-color: #9e9e9e;">
            <span class="name dark-when-small">Grey</span>
            <span class="shade dark-when-small">500</span>
            <span class="hex dark-when-small">#9e9e9e</span>
          </li>
          <li class="color dark" style="background-color: #fafafa;">
            <span class="shade expanded">50</span>
            <span class="hex">#fafafa</span>
          </li>
          <li class="color dark" style="background-color: #f5f5f5;">
            <span class="shade">100</span>
            <span class="hex">#f5f5f5</span>
          </li>
          <li class="color dark" style="background-color: #eeeeee;">
            <span class="shade expanded">200</span>
            <span class="hex">#eeeeee</span>
          </li>
          <li class="color dark" style="background-color: #e0e0e0;">
            <span class="shade">300</span>
            <span class="hex">#e0e0e0</span>
          </li>
          <li class="color dark" style="background-color: #bdbdbd;">
            <span class="shade expanded">400</span>
            <span class="hex">#bdbdbd</span>
          </li>
          <li class="color dark" style="background-color: #9e9e9e;">
            <span class="shade">500</span>
            <span class="hex">#9e9e9e</span>
          </li>
          <li class="color" style="background-color: #757575;">
            <span class="shade expanded">600</span>
            <span class="hex">#757575</span>
          </li>
          <li class="color" style="background-color: #616161;">
            <span class="shade">700</span>
            <span class="hex">#616161</span>
          </li>
          <li class="color" style="background-color: #424242;">
            <span class="shade expanded">800</span>
            <span class="hex">#424242</span>
          </li>
          <li class="color" style="background-color: #212121;">
            <span class="shade expanded">900</span>
            <span class="hex">#212121</span>
          </li>
        </ul>
      </section>
      <section class="color-group">
        <ul>
          <li class="color main-color" style="background-color: #607d8b;">
            <span class="name light-strong">Blue Grey</span>
            <span class="shade light-strong">500</span>
            <span class="hex light-strong">#607d8b</span>
          </li>
          <li class="color dark" style="background-color: #eceff1;">
            <span class="shade expanded">50</span>
            <span class="hex">#eceff1</span>
          </li>
          <li class="color dark" style="background-color: #cfd8dc;">
            <span class="shade">100</span>
            <span class="hex">#cfd8dc</span>
          </li>
          <li class="color dark" style="background-color: #b0bec5;">
            <span class="shade expanded">200</span>
            <span class="hex">#b0bec5</span>
          </li>
          <li class="color dark" style="background-color: #90a4ae;">
            <span class="shade">300</span>
            <span class="hex">#90a4ae</span>
          </li>
          <li class="color light-strong" style="background-color: #78909c;">
            <span class="shade expanded">400</span>
            <span class="hex">#78909c</span>
          </li>
          <li class="color" style="background-color: #607d8b;">
            <span class="shade">500</span>
            <span class="hex">#607d8b</span>
          </li>
          <li class="color" style="background-color: #546e7a;">
            <span class="shade expanded">600</span>
            <span class="hex">#546e7a</span>
          </li>
          <li class="color" style="background-color: #455a64;">
            <span class="shade">700</span>
            <span class="hex">#455a64</span>
          </li>
          <li class="color" style="background-color: #37474f;">
            <span class="shade expanded">800</span>
            <span class="hex">#37474f</span>
          </li>
          <li class="color" style="background-color: #263238;">
            <span class="shade expanded">900</span>
            <span class="hex">#263238</span>
          </li>
        </ul>
      </section>
      <section class="color-group">
        <ul>
          <li class="color" style="background-color: #000000;">
            <span class="shade accent">Black</span>
            <span class="hex">#000000</span>
          </li>
          <li class="color dark" style="background-color: #ffffff;">
            <span class="shade accent expanded">White</span>
            <span class="hex">#ffffff</span>
          </li>
        </ul>
      </section>
      <div class="module-end"></div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
h1 {
  text-align: center;
}

h2 {
  padding-top: 30px;
}

h3 {
  padding-top: 20px;
}

p {
  line-height: 24px;
  color: #555;
  font-size: 16px;
  padding-top: 10px;
}
.demos img{
  display: inline-block;
  vertical-align: top;
  width: 180px;
  height: auto;
  margin: 10px 10px 0 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, .22)
}
.color-palette {
  display: flex;
  flex-wrap: wrap;
  padding-top: 50px;
}

.color-group {
  width: 250px;
  margin: 0 25px 50px 25px;
}

li {
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgba(255, 255, 255, .87);
}

li.dark {
  color: rgba(0, 0, 0, .87);
}

li.light-strong {
  color: #fff;
  font-weight: 500;
}

.color-palette .color-group li.divide,
.color-palette .color-group:last-child li.divide {
  border-top: 4px solid #fafafa;
}

.main-color {
  border-bottom: 4px solid #fafafa;
  position: relative;
  padding-top: 50px;
}

.main-color .name {
  position: absolute;
  top: 10px;
  left: 10px;
}
</style>
