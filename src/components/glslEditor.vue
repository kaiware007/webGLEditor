<template>
  <div>
    Hello World!!!!!!
  </div>
</template>

<script>
export default {
  name: 'glslEditor',
  data () {
    return {
      value: 0
    }
  }
}
</script>

<style scoped>
.container
{
  margin: 0px;
  width: 100%;
  box-sizing: border-box;

  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  /* display: grid;
  grid-template-columns: 800px auto;
  grid-template-rows: auto auto;
  align-items: start; */
}

.blockleft
{
  flex: 0 1 20%;
  align-self: flex-start;

  /* justify-content: center; */
}

.borderblock
{
  padding: 16px;
  margin: 8px;
  background-color: #444;
  border-radius: 10px
}

.blockright
{
  flex: 1 0 640px;
}

.seqbar
{
  width: 100%;
  height: 14px;
  border: 0px solid #000000;
  outline: 0px solid #000000;
  margin: 0px;
  padding: 12px 2px 12px 2px;
  /* left: 0px;
  bottom: 0px; */
  /* border-radius: 0px 0px 4px 4px; */
  box-sizing: border-box;
}

/* input, button, textarea, select {
  margin: 0;
  padding: 0;
  background: none;
  border: none;
  border-radius: 0;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
} */

.input-range[type="range"] {
  -webkit-appearance: none;
  appearance: none;
  background-color: #f0f0f0;
  height: 2px;
  width: 100%;
  margin: 0px;
  flex: 1 1 50%;
}
.input-range[type="range"]:focus,
.input-range[type="range"]:active {
    outline: none;
  }
.input-range[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    position: relative;
    border: none;
    width: 12px;
    height: 12px;
    display: block;
    background-color: #f0f0f0;
    border-radius: 50%;
    -webkit-border-radius: 50%;
  }

.controlbar {
  display: flex;
  width: 100%;
  align-items: center; /*アイコン、テキストボックスを縦方向の中心に*/
  /* justify-content: left; /*アイコン、テキストボックスを横方向の中心に*/
}

.toolbar {
  display: flex;
  width: 100%;
  align-items: center; /*アイコン、テキストボックスを縦方向の中心に*/
  /* justify-content: left; /*アイコン、テキストボックスを横方向の中心に*/
}

.playbutton {
  flex: 1 1 24px;
  font-size: 24px;
  position: relative;
  margin: 2px;
  width: 0px;
  border-top: 0.4em solid transparent;
  border-left: 0.8em solid #ccc;
  border-bottom: 0.4em solid transparent;
}

.pausebutton {
  flex: 1 0 24px;
  font-size: 24px;
  position: relative;
  margin: 2px;
  left: -10px;
  top: -4px;
  padding: 0px;
  width: 0.8em;
  height: 24px;
  background:linear-gradient(to bottom, #ccc 0%, #ccc 100%) 0.45em 0.3em,linear-gradient(to bottom, #ccc 0%, #ccc 100%) 0.75em 0.3em;
  background-size: 0.2em 0.8em;
  background-repeat: no-repeat;
}

.controlbar-span {
  box-sizing: border-box; /*横幅の解釈をpadding, borderまでとする*/
  text-align: center;
}

.toolbar-span {
  flex: 2 1 100%;
  box-sizing: border-box; /*横幅の解釈をpadding, borderまでとする*/
  text-align: left;
}

#renderbutton
{
  width:100%;
  /* max-width: 150; */
  padding: 8px;
  margin: 2px 10px;
  border-radius: 10px; /*ボックス角の丸み*/
  border: 1px solid #ddd; /*枠線*/
  box-sizing: border-box; /*横幅の解釈をpadding, borderまでとする*/
  background-color: #ddd;
  color: #d22;
  font-weight: bold;
  font-style: normal;
  font-family: Tahoma,Arial;
  font-size: 18px;
}

select,
input[type="text"] {
    width:100%;
    /* max-width: 150; */
    /* font-size: 16px; */
    padding: 4px;
    margin: 2px 10px;
    border-radius: 10px; /*ボックス角の丸み*/
    border: 1px solid #222; /*枠線*/
    box-sizing: border-box; /*横幅の解釈をpadding, borderまでとする*/
    background-color: #222;
    color: #ccc;
    font-weight: bold;
    font-style: normal;
    font-family: Tahoma,Arial;
    font-size: 14px;
}

.errormessage {
  color: #d00;
  resize: none;
  background-color: transparent;
  padding: 0.5em;          /* 内側の余白量 */
  width: 100%;             /* 横幅 */
  border: none;
  font-style: normal;
  font-family: Tahoma,Arial;
  font-weight: bold;
}

header
{
  background-color: #21D4FD;
  background-image: linear-gradient(135deg, #21D4FD 0%, #B721FF 100%);
  color: #fff;
  padding: 1px 10px;
}

body
{
  font-weight: bold;
  font-size: 14px;
  font-style: normal;
  font-family: Tahoma,Arial;
  padding: 0px;
  margin: 0px;
  text-align: left;
  background-color: #222;
  color: #aaa;
  user-select: text;
}
</style>
