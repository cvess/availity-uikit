/*!
 * 
 * availity-uikit v3.0.0-beta.2 (08/25/2016)
 * (c) Availity, LLC
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("availity-uikit", [], factory);
	else if(typeof exports === 'object')
		exports["availity-uikit"] = factory();
	else
		root["availity-uikit"] = factory();
})(this, function() {
return webpackJsonpavaility_uikit([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';var _jquery=__webpack_require__(2);var _jquery2=_interopRequireDefault(_jquery);var _chart=__webpack_require__(4);var _chart2=_interopRequireDefault(_chart);__webpack_require__(48);__webpack_require__(49);__webpack_require__(50);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}(0,_jquery2.default)('[data-toggle=\"popover\"]').popover({html:true});(0,_jquery2.default)('[data-toggle=\"tooltip\"]').tooltip();(0,_jquery2.default)('.docs-example').each(function(){var btn='\\n    <hr class=\"divider-lg\"/>\\n    <div class=\"btn-toolbar\">\\n      <button class=\"btn btn-ghost btn-sm\" data-toggle=\"code\">\\n        View Code <i class=\"icon icon-code\"></i>\\n      </button>\\n    </div>';(0,_jquery2.default)(this).append((0,_jquery2.default)(btn));});(0,_jquery2.default)('[data-toggle=\"code\"]').click(function(e){e.preventDefault();var target=(0,_jquery2.default)(this).parents('.docs-example').next('.language-markup');if(target.is(':visible')){target.velocity('slideUp',{duration:200});}else{target.velocity('fadeIn',{duration:300,display:'block'});}});// filter popover\n(0,_jquery2.default)('[data-toggle=\"filter\"]').popover({html:true,placement:(0,_jquery2.default)(undefined).attr('data-placement'),trigger:'click',content:function content(){var target=(0,_jquery2.default)(this).attr('data-target');var $target=(0,_jquery2.default)(target);return $target.html();}});(0,_jquery2.default)('.dropdown-menu a[data-toggle=\"tab\"]').click(function(e){e.stopPropagation();(0,_jquery2.default)(this).tab('show');});(0,_jquery2.default)('#datetimepicker6').datepicker({autoclose:true,clearBtn:true,todayBtn:true,todayHighlight:true,format:'mm/dd/yyyy'});// Select2\n(0,_jquery2.default)('#single-select, #multiple-select').select2({placeholder:'Select a State',allowClear:true}).on('select2-open',function(){var $this=(0,_jquery2.default)(this);if($this.parents('[class*=\"has-\"]').length){// get all CSS-classes from the element where we found \"has-*\" and collect them in an array\nvar classNames=$this.parents('[class*=\"has-\"]')[0].className.split(/\\s+/);// go through the class names, find \"has-\"\nfor(var i=0;i<classNames.length;++i){if(classNames[i].match('has-')){(0,_jquery2.default)('#select2-drop').addClass(classNames[i]);}}}});(0,_jquery2.default)('.select2, .select2-multiple').select2({allowClear:true});// DO NOT USE THIS IN PRODUCTION. DEMO PURPOSES ONLY.\nsetInterval(function(){var indicators=(0,_jquery2.default)('.loading-indicator');for(var i=0;i<indicators.length;i++){(0,_jquery2.default)(indicators[i]).find('.loading-bullet').velocity('transition.slideRightIn',{stagger:250}).delay(750).velocity({opacity:0},500);}},2000);var data={labels:['January','February','March','April','May','June','July'],datasets:[{label:'My First dataset',backgroundColor:'rgba(0,154,87,0.5)',borderColor:'rgba(0,154,87,0.8)',borderWidth:2,hoverBackgroundColor:'rgba(0,154,87,0.75)',hoverBorderColor:'rgba(0,154,87,1)',hoverBrderWidth:2,data:[65,59,80,81,56,55,40]},{label:'My Second dataset',backgroundColor:'rgba(0,147,232,0.5)',borderColor:'rgba(0,147,232,0.8)',borderWidth:2,hoverBackgroundColor:'rgba(0,147,232,0.75)',hoverBorderColor:'rgba(0,147,232,1)',hoverBrderWidth:2,data:[28,48,40,19,86,27,90]},{label:'My Third dataset',backgroundColor:'rgba(212,208,8,0.5)',borderColor:'rgba(212,208,8,0.8)',borderWidth:2,hoverBackgroundColor:'rgba(212,208,8,0.75)',hoverBorderColor:'rgba(212,208,8,1)',hoverBrderWidth:2,data:[18,98,19,55,20,34,70]}]};var $chart1=(0,_jquery2.default)('#guideChart1');if($chart1.length){/* eslint new-cap: 0 */new _chart2.default($chart1,{type:'bar',data:data,options:{responsive:true,maintainAspectRatio:false,tooltips:{mode:'label',caretSize:0},legend:{display:false}}});}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9kb2NzL2pzL2luZGV4LmpzPzllMmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDaGFydCBmcm9tICdjaGFydC5qcyc7XG5pbXBvcnQgJ2hvbGRlcmpzJztcblxuaW1wb3J0ICcuLi9zY3NzL2RvY3Muc2Nzcyc7XG5pbXBvcnQgJ2FuaW1hdGUuY3NzL2FuaW1hdGUuY3NzJztcblxuJCgnW2RhdGEtdG9nZ2xlPVwicG9wb3ZlclwiXScpLnBvcG92ZXIoe1xuICBodG1sOiB0cnVlXG59KTtcblxuJCgnW2RhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXScpLnRvb2x0aXAoKTtcblxuJCgnLmRvY3MtZXhhbXBsZScpLmVhY2goZnVuY3Rpb24oKSB7XG5cbiAgY29uc3QgYnRuID0gYFxuICAgIDxociBjbGFzcz1cImRpdmlkZXItbGdcIi8+XG4gICAgPGRpdiBjbGFzcz1cImJ0bi10b29sYmFyXCI+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1naG9zdCBidG4tc21cIiBkYXRhLXRvZ2dsZT1cImNvZGVcIj5cbiAgICAgICAgVmlldyBDb2RlIDxpIGNsYXNzPVwiaWNvbiBpY29uLWNvZGVcIj48L2k+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5gO1xuXG4gICQodGhpcykuYXBwZW5kKCQoYnRuKSk7XG5cbn0pO1xuXG4kKCdbZGF0YS10b2dnbGU9XCJjb2RlXCJdJykuY2xpY2soZnVuY3Rpb24oZSkge1xuXG4gIGUucHJldmVudERlZmF1bHQoKTtcblxuICBjb25zdCB0YXJnZXQgPSAkKHRoaXMpLnBhcmVudHMoJy5kb2NzLWV4YW1wbGUnKS5uZXh0KCcubGFuZ3VhZ2UtbWFya3VwJyk7XG5cbiAgaWYgKHRhcmdldC5pcygnOnZpc2libGUnKSkge1xuICAgIHRhcmdldC52ZWxvY2l0eSgnc2xpZGVVcCcsIHsgZHVyYXRpb246IDIwMCB9KTtcbiAgfSBlbHNlIHtcbiAgICB0YXJnZXQudmVsb2NpdHkoJ2ZhZGVJbicsIHtcbiAgICAgIGR1cmF0aW9uOiAzMDAsXG4gICAgICBkaXNwbGF5OiAnYmxvY2snXG4gICAgfSk7XG4gIH1cblxufSk7XG5cbi8vIGZpbHRlciBwb3BvdmVyXG4kKCdbZGF0YS10b2dnbGU9XCJmaWx0ZXJcIl0nKS5wb3BvdmVyKHtcbiAgaHRtbDogdHJ1ZSxcbiAgcGxhY2VtZW50OiAkKHRoaXMpLmF0dHIoJ2RhdGEtcGxhY2VtZW50JyksXG4gIHRyaWdnZXI6ICdjbGljaycsXG4gIGNvbnRlbnQoKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gJCh0aGlzKS5hdHRyKCdkYXRhLXRhcmdldCcpO1xuICAgIGNvbnN0ICR0YXJnZXQgPSAkKHRhcmdldCk7XG4gICAgcmV0dXJuICR0YXJnZXQuaHRtbCgpO1xuICB9XG59KTtcblxuJCgnLmRyb3Bkb3duLW1lbnUgYVtkYXRhLXRvZ2dsZT1cInRhYlwiXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgJCh0aGlzKS50YWIoJ3Nob3cnKTtcbn0pO1xuXG4kKCcjZGF0ZXRpbWVwaWNrZXI2JykuZGF0ZXBpY2tlcih7XG4gIGF1dG9jbG9zZTogdHJ1ZSxcbiAgY2xlYXJCdG46IHRydWUsXG4gIHRvZGF5QnRuOiB0cnVlLFxuICB0b2RheUhpZ2hsaWdodDogdHJ1ZSxcbiAgZm9ybWF0OiAnbW0vZGQveXl5eSdcbn0pO1xuXG4vLyBTZWxlY3QyXG5cbiQoJyNzaW5nbGUtc2VsZWN0LCAjbXVsdGlwbGUtc2VsZWN0Jykuc2VsZWN0Mih7XG4gIHBsYWNlaG9sZGVyOiAnU2VsZWN0IGEgU3RhdGUnLFxuICBhbGxvd0NsZWFyOiB0cnVlXG59KS5vbignc2VsZWN0Mi1vcGVuJywgZnVuY3Rpb24oKSB7XG5cbiAgY29uc3QgJHRoaXMgPSAkKHRoaXMpO1xuICBpZiAoJHRoaXMucGFyZW50cygnW2NsYXNzKj1cImhhcy1cIl0nKS5sZW5ndGgpIHtcblxuICAgIC8vIGdldCBhbGwgQ1NTLWNsYXNzZXMgZnJvbSB0aGUgZWxlbWVudCB3aGVyZSB3ZSBmb3VuZCBcImhhcy0qXCIgYW5kIGNvbGxlY3QgdGhlbSBpbiBhbiBhcnJheVxuICAgIGNvbnN0IGNsYXNzTmFtZXMgPSAkdGhpcy5wYXJlbnRzKCdbY2xhc3MqPVwiaGFzLVwiXScpWzBdLmNsYXNzTmFtZS5zcGxpdCgvXFxzKy8pO1xuXG4gICAgLy8gZ28gdGhyb3VnaCB0aGUgY2xhc3MgbmFtZXMsIGZpbmQgXCJoYXMtXCJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNsYXNzTmFtZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgIGlmIChjbGFzc05hbWVzW2ldLm1hdGNoKCdoYXMtJykpIHtcbiAgICAgICAgJCgnI3NlbGVjdDItZHJvcCcpLmFkZENsYXNzKGNsYXNzTmFtZXNbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSk7XG5cbiQoJy5zZWxlY3QyLCAuc2VsZWN0Mi1tdWx0aXBsZScpLnNlbGVjdDIoe1xuICBhbGxvd0NsZWFyOiB0cnVlXG59KTtcblxuLy8gRE8gTk9UIFVTRSBUSElTIElOIFBST0RVQ1RJT04uIERFTU8gUFVSUE9TRVMgT05MWS5cbnNldEludGVydmFsKCgpID0+IHtcbiAgY29uc3QgaW5kaWNhdG9ycyA9ICQoJy5sb2FkaW5nLWluZGljYXRvcicpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGluZGljYXRvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAkKGluZGljYXRvcnNbaV0pLmZpbmQoJy5sb2FkaW5nLWJ1bGxldCcpXG4gICAgICAudmVsb2NpdHkoJ3RyYW5zaXRpb24uc2xpZGVSaWdodEluJywgeyBzdGFnZ2VyOiAyNTAgfSlcbiAgICAgIC5kZWxheSg3NTApXG4gICAgICAudmVsb2NpdHkoeyBvcGFjaXR5OiAwIH0sIDUwMCk7XG4gIH1cbn0sIDIwMDApO1xuXG5jb25zdCBkYXRhID0ge1xuICBsYWJlbHM6IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5J10sXG4gIGRhdGFzZXRzOiBbXG4gICAge1xuICAgICAgbGFiZWw6ICdNeSBGaXJzdCBkYXRhc2V0JyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwxNTQsODcsMC41KScsXG4gICAgICBib3JkZXJDb2xvcjogJ3JnYmEoMCwxNTQsODcsMC44KScsXG4gICAgICBib3JkZXJXaWR0aDogMixcbiAgICAgIGhvdmVyQmFja2dyb3VuZENvbG9yOiAncmdiYSgwLDE1NCw4NywwLjc1KScsXG4gICAgICBob3ZlckJvcmRlckNvbG9yOiAncmdiYSgwLDE1NCw4NywxKScsXG4gICAgICBob3ZlckJyZGVyV2lkdGg6IDIsXG4gICAgICBkYXRhOiBbNjUsIDU5LCA4MCwgODEsIDU2LCA1NSwgNDBdXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogJ015IFNlY29uZCBkYXRhc2V0JyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwxNDcsMjMyLDAuNSknLFxuICAgICAgYm9yZGVyQ29sb3I6ICdyZ2JhKDAsMTQ3LDIzMiwwLjgpJyxcbiAgICAgIGJvcmRlcldpZHRoOiAyLFxuICAgICAgaG92ZXJCYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsMTQ3LDIzMiwwLjc1KScsXG4gICAgICBob3ZlckJvcmRlckNvbG9yOiAncmdiYSgwLDE0NywyMzIsMSknLFxuICAgICAgaG92ZXJCcmRlcldpZHRoOiAyLFxuICAgICAgZGF0YTogWzI4LCA0OCwgNDAsIDE5LCA4NiwgMjcsIDkwXVxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6ICdNeSBUaGlyZCBkYXRhc2V0JyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjEyLDIwOCw4LDAuNSknLFxuICAgICAgYm9yZGVyQ29sb3I6ICdyZ2JhKDIxMiwyMDgsOCwwLjgpJyxcbiAgICAgIGJvcmRlcldpZHRoOiAyLFxuICAgICAgaG92ZXJCYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDIxMiwyMDgsOCwwLjc1KScsXG4gICAgICBob3ZlckJvcmRlckNvbG9yOiAncmdiYSgyMTIsMjA4LDgsMSknLFxuICAgICAgaG92ZXJCcmRlcldpZHRoOiAyLFxuICAgICAgZGF0YTogWzE4LCA5OCwgMTksIDU1LCAyMCwgMzQsIDcwXVxuICAgIH1cbiAgXVxufTtcblxuY29uc3QgJGNoYXJ0MSA9ICQoJyNndWlkZUNoYXJ0MScpO1xuaWYgKCRjaGFydDEubGVuZ3RoKSB7XG4gIC8qIGVzbGludCBuZXctY2FwOiAwICovXG4gIG5ldyBDaGFydCgkY2hhcnQxLCB7dHlwZTogJ2JhcicsIGRhdGEsIG9wdGlvbnM6IHtcbiAgICByZXNwb25zaXZlOiB0cnVlLFxuICAgIG1haW50YWluQXNwZWN0UmF0aW86IGZhbHNlLFxuICAgIHRvb2x0aXBzOiB7XG4gICAgICBtb2RlOiAnbGFiZWwnLFxuICAgICAgY2FyZXRTaXplOiAwLFxuICAgIH0sXG4gICAgbGVnZW5kOiB7XG4gICAgICBkaXNwbGF5OiBmYWxzZSxcbiAgICB9LFxuICB9fSk7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBkb2NzL2pzL2luZGV4LmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiQUFBQTtBQTZDQTtBQTBCQTtBQVNBO0FBR0E7QUFhQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ },

/***/ 49:
/***/ function(module, exports) {

	eval("// removed by extract-text-webpack-plugin//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDkuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kb2NzL3Njc3MvZG9jcy5zY3NzP2EwMjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vZG9jcy9zY3NzL2RvY3Muc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDQ5XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9");

/***/ },

/***/ 50:
/***/ function(module, exports) {

	eval("// removed by extract-text-webpack-plugin//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L2FuaW1hdGUuY3NzL2FuaW1hdGUuY3NzPzdmZmIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9hbmltYXRlLmNzcy9hbmltYXRlLmNzc1xuICoqIG1vZHVsZSBpZCA9IDUwXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }

})
});
;