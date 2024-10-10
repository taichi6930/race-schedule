/* eslint-disable no-irregular-whitespace */
import { Logger } from '../../utility/logger';
import { IKeirinPlaceDataHtmlGateway } from '../interface/iKeirinPlaceDataHtmlGateway';
/**
 * 競馬場開催データのHTMLを取得するGateway
 */
export class MockKeirinPlaceDataHtmlGateway
    implements IKeirinPlaceDataHtmlGateway
{
    testHtmlUrl = `
<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="ja" xml:lang="ja">
	<head>


		<meta http-equiv="content-type" content="text/html; charset=utf-8" />
		<meta http-equiv="content-style-type" content="text/css" />
		<meta http-equiv="content-script-type" content="text/javascript" />
		<meta http-equiv="content-language" content="ja" />

		<meta name="author" content="Odds Park Corp." />
		<meta name="Keywords" content="競輪,KEIRIN,ケイリン,ライブ中継,無料予想" />
		<meta name="Description" content="オッズパークでは、競輪（KEIRIN）の車券をインターネットで購入することができます。レースの予想情報やライブ映像も【無料】でご覧いただけます。またオッズパークLOTOでは最高12億円の重勝式投票券も販売しています。" />
		<meta name="copyright" content="Copyright (C) Odds Park Corp. Co., Ltd. All Rights Reserved." lang="en" />
		<meta http-equiv="pragma" content="no-cache" />
		<meta http-equiv="cache-control" content="no-cache" />
		<meta http-equiv="expires" content="-1" />


			<meta name="robots" content="noindex" />

		<title >競輪開催スケジュール(2024年11月)｜競輪（KEIRIN）ならオッズパーク競輪</title>


		<link rel="stylesheet" type="text/css" media="screen,print" href="/ud_shared/pc/keirin/keirin/shared/css/main.css?20131001&20220510132530" />
		<link rel="stylesheet" type="text/css" media="screen,print" href="/ud_shared/pc/keirin/keirin/shared/css/lib.css?20220510132533" />
		<link rel="stylesheet" type="text/css" media="screen,print" href="/ud_shared/pc/keirin/keirin/shared/css/modal.css?20131001&20220510132532" />
		<script type="text/javascript" src="/ud_shared/pc/keirin/keirin/shared/js/jquery-3.6.0.min.js?20220510132531"></script>
		<script type="text/javascript" src="/ud_shared/pc/keirin/keirin/shared/js/lib.js?201505&20221013111718"></script>
		<script type="text/javascript" src="/ud_shared/pc/keirin/keirin/shared/js/jquery.easing.1.3.js?20220510132530"></script>
		<script type="text/javascript" src="/ud_shared/pc/keirin/keirin/shared/js/jquery.modal.js?20131011&20220510132530"></script>
		<script type="text/javascript" src="/ud_shared/pc/keirin/keirin/shared/js/info-util.js?20130801&20220510132531"></script>


		<script type="text/javascript">
		$(function() {
			/**
			 * 表示ボタン押下時の処理を行います。
     		 */
			$("form").on("submit",function() {
				var nen = $('#nen').val();
				var tsuki = $('#tsuki').val();
					tsuki = ('00' + tsuki).slice(-2);
					$('#target').val(nen + tsuki);
			});
		});
		</script>
	</head>
	<body id="info">
		<div id="wrap">


			<div id="header">
				<div id="headerInner">
					<a href="/keirin/"><h1>競輪（KEIRIN・ケイリン）ならオッズパーク競輪｜予想情報も充実！</h1></a>
					&nbsp;<h2>車券が買える！競輪を楽しむならオッズパーク</h2>
					&nbsp;<ul id="nav1">

						<li><a onclick="javascript:return confirm('ログアウトをしてもよろしいですか？');" href="/keirin/jsp/sso_filter/LogoutPc.jsp?SSO_PROCESS=LOGOUT">ログアウト</a></li>


						<li><a href="https://faq.oddspark.com/">よくあるご質問</a></li>
						<li><a href="/">総合TOP</a></li>
					</ul>
					<ul id="nav2">
						<li><a href="/keiba" class="nv1">競馬</a></li>
						<li class="active"><a href="/keirin/" class="nv2">競輪</a></li>
						<li><a href="/autorace" class="nv8">オートレース</a></li>
						<li><a href="/loto" class="nv3">LOTO</a></li>
						<li><a href="/keirin/auth/VoteKeirinTop.do?gamenId=KP001&amp;gamenKoumokuId=topVote" onclick="openFullWindow(this.href); return false;" class="nv4">投票する</a></li>
						<li><a href="/auth/NyukinMenu.do" onclick="openFullWindow(this.href); return false;" class="nv5">入金・精算</a></li>
						<li><a href="/auth/InqTop.do" onclick="openFullWindow(this.href); return false;" class="nv6">照会</a></li>
						<li><a href="/user/my/Index.do" class="nv7">マイページ</a></li>
					</ul>
				</div>
			</div><!-- //header -->



			<div id="nav">
				<ul>
					<li><a href="/keirin/" class="nv1">TOP</a></li>
					<li><a href="/keirin/RaceListInfo.do" class="nv2">レース情報</a></li>
					<li><a href="/keirin/auth-yosou/" class="nv3">予想情報</a></li>
					<li class="active"><a href="/keirin/KaisaiCalendar.do" class="nv4">スケジュール</a></li>
					<li><a href="/keirin/SearchPlayer.do" class="nv5">データベース</a></li>
					<li><a href="/keirin/auth-campaign/" class="nv6">キャンペーン</a></li>
				</ul>
			</div>
			<!-- //nav -->

				<div id="marq"><marquee>和歌山競輪　Dokanto!・通常賭式発売中！　　防府競輪　LOTO・通常賭式発売中！
</marquee></div>



			<div id="content">

				<ul id="bcrumb">
					<li><a href="/">オッズパークTOP</a></li>
					<li><a href="/keirin/">競輪TOP</a></li>
					<li>競輪開催スケジュール</li>
				</ul>





				<div class="section">

					<div class="w200px bl-left">
						<ul id="date_pr">
    						<li>

    								<a href="/keirin/KaisaiCalendar.do?target=202410">
    								←前月</a>

    						</li>
						</ul>
					</div>

					<div class="w570px m5 al-center bl-left bg-2-pl">
						<form name="kaisaiCalendarForm" id="kaisaiCalendarForm" method="get" action="/keirin/KaisaiCalendar.do" style="display:inline">
							<select name="nen" id="nen">
        						<option value="2011">2011</option>
        						<option value="2012">2012</option>
        						<option value="2013">2013</option>
        						<option value="2014">2014</option>
        						<option value="2015">2015</option>
        						<option value="2016">2016</option>
        						<option value="2017">2017</option>
        						<option value="2018">2018</option>
        						<option value="2019">2019</option>
        						<option value="2020">2020</option>
        						<option value="2021">2021</option>
        						<option value="2022">2022</option>
        						<option value="2023">2023</option>
        						<option value="2024" selected="selected">2024</option>
        						<option value="2025">2025</option>
        					</select>
        					年
        					<select name="tsuki" id="tsuki" >
        						<option value="1">1</option>
        						<option value="2">2</option>
        						<option value="3">3</option>
        						<option value="4">4</option>
        						<option value="5">5</option>
        						<option value="6">6</option>
        						<option value="7">7</option>
        						<option value="8">8</option>
        						<option value="9">9</option>
        						<option value="10">10</option>
        						<option value="11" selected="selected">11</option>
        						<option value="12">12</option>
							</select>
							月
    					</form>
						<form name="kaisaiCalendarForm" id="kaisaiCalendarForm" method="get" action="/keirin/KaisaiCalendar.do" style="display:inline">
								<input type="hidden" name="target" id="target" value=""/>
								<input type="submit" value="表示" />
							</form>
    				</div>


					<div class="w200px bl-left">
						<ul id="date_nx">
							<li>

									<a href="/keirin/KaisaiCalendar.do?target=202412">
									次月→</a>

							</li>
						</ul>
					</div>
				</div>

				<div class="section">
<style>
table.tb10 td img{ margin:1px;}
#info #wrap {
	margin-bottom:380px;
}
table.ref_sche td.today, table.ref_sche th.today{
 background:#FEF1C4; border-right:2px solid #666 !important;border-left:2px solid #666 !important;
 }
</style>

<style type="text/css">
#menu {
  width:986px;
  z-index: 999;
  padding: 0;
  list-style-type: none;
}
#menu li {
  width:119px;
  float:left;
  padding:0;
  margin:0 4px 0 0;
  text-align:center;
  border-radius:5px;
  box-shadow:0px 2px 3px -1px #666;
  -moz-box-shadow:0px 2px 3px -1px #666;
  -webkit-box-shadow:0px 2px 3px -1px #666;
}
#menu li.right {
  width:120px;
}
#menu li a {
  color:#666;
  background:#fff;
  width:auto;
  font-size:12px;
  font-weight:bold;
  padding:5px 0;
  text-decoration:none;
  display:block;
  border:#ccc solid 1px;
  border-radius:5px;
}
#menu li a:hover {
  background:#ccc;
}
menu li:first-child a{
  border-radius:5px 0 0 5px;
}
menu li:last-child a{
  border-radius:0 5px 5px 0;
}
</style>

						<ul id="menu">
							<li><a href="#area_01">北日本</a></li>
							<li><a href="#area_02">関東</a></li>
							<li><a href="#area_03">南関東</a></li>
							<li><a href="#area_04">中部</a></li>
							<li><a href="#area_05">近畿</a></li>
							<li><a href="#area_06">中国</a></li>
							<li><a href="#area_07">四国</a></li>
							<li class="right"><a href="#area_08">九州</a></li>
						</ul>

<style type="text/css">
#sidebar {
  position: relative;
  float: left;
  width: 300px;
}
.fixed {
  position: fixed;
  top: 0px;
  margin-bottom:300px;
}
#area_01 {
    margin-top:-20px;
    padding-top:30px;
}
#area_02 {
    margin-top:-20px;
    padding-top:20px;
}
#area_03 {
    margin-top:-20px;
    padding-top:20px;
}
#area_04 {
    margin-top:-20px;
    padding-top:20px;
}
#area_05 {
    margin-top:-20px;
    padding-top:20px;
}
#area_06 {
    margin-top:-20px;
    padding-top:20px;
}
#area_07 {
    margin-top:-20px;
    padding-top:20px;
}
#area_08 {
    margin-top:-20px;
    padding-top:20px;
}
</style>

						<script type="text/javascript">
							var nav    = $('#menu'),
								offset = nav.offset();

							$(window).on("scroll",(function () {
								if($(window).scrollTop() > offset.top - 20) {
								nav.addClass('fixed');
							} else {
								nav.removeClass('fixed');
								}
							}));
						</script>


						<script type="text/javascript">
							$(function(){
								$('a[href^="#"]').on("click",(function(){
									var speed = 900;
									var href= $(this).attr("href");
									var target = $(href == "#" || href == "" ? 'html' : href);
									var position = target.offset().top;
									$("html, body").animate({scrollTop:position}, speed, "swing");
										return false;
							}));
							});
							//スムーズスクロール
							jQuery(function(){
								// ★　任意のズレ高さピクセル数を入力　↓
								var headerHight = 8;
								// #で始まるアンカーをクリックした場合に処理
								jQuery('a[href^="#"]').on("click",(function() {
									// スクロールの速度
									var speed = 100; // ミリ秒
									// アンカーの値取得
									var href= jQuery(this).attr("href");
									// 移動先を取得
									var target = jQuery(href == "#" || href == "" ? 'html' : href);
									// 移動先を数値で取得
									var position = target.offset().top-headerHight; // ※　-headerHightでズレの処理
									// スムーズスクロール
									jQuery('body,html').animate({scrollTop:position}, speed, 'swing');
									return false;
								}));
							});
						</script>

<style>
.grade {
  position: relative;
  padding-bottom:4px;
}
.time {
	display: flex;
	justify-content: center;
}
tr.ref_sche td {
	vertical-align:bottom;
}
</style>



						<style> table.tb10 td img{ margin:1px;}</style>


					   		<div id="area_01" ></div>
					    	<table class="tb10 w980px mT20 noborder imgM1 ref_sche">
								<tr class="noborder">

									<th class="noborder"/>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

								</tr>

								<tr class="ref_sche">
									<th width="7%" rowspan="2" >北日本</th>

										<th width="3%">1</th>

										<th width="3%" class="bg-4-lt">2</th>

										<th width="3%" class="bg-3-lt">3</th>

										<th width="3%" class="bg-3-lt">4</th>

										<th width="3%">5</th>

										<th width="3%">6</th>

										<th width="3%">7</th>

										<th width="3%">8</th>

										<th width="3%" class="bg-4-lt">9</th>

										<th width="3%" class="bg-3-lt">10</th>

										<th width="3%">11</th>

										<th width="3%">12</th>

										<th width="3%">13</th>

										<th width="3%">14</th>

										<th width="3%">15</th>

										<th width="3%" class="bg-4-lt">16</th>

										<th width="3%" class="bg-3-lt">17</th>

										<th width="3%">18</th>

										<th width="3%">19</th>

										<th width="3%">20</th>

										<th width="3%">21</th>

										<th width="3%">22</th>

										<th width="3%" class="bg-3-lt">23</th>

										<th width="3%" class="bg-3-lt">24</th>

										<th width="3%">25</th>

										<th width="3%">26</th>

										<th width="3%">27</th>

										<th width="3%">28</th>

										<th width="3%">29</th>

										<th width="3%" class="bg-4-lt">30</th>

								</tr>

								<tr class="ref_sche_week" id="targetBox5">

										<td>金</td>

										<td class="bg-4-lt">土</td>

										<td class="bg-3-lt">日</td>

										<td class="bg-3-lt">月</td>

										<td>火</td>

										<td>水</td>

										<td>木</td>

										<td>金</td>

										<td class="bg-4-lt">土</td>

										<td class="bg-3-lt">日</td>

										<td>月</td>

										<td>火</td>

										<td>水</td>

										<td>木</td>

										<td>金</td>

										<td class="bg-4-lt">土</td>

										<td class="bg-3-lt">日</td>

										<td>月</td>

										<td>火</td>

										<td>水</td>

										<td>木</td>

										<td>金</td>

										<td class="bg-3-lt">土</td>

										<td class="bg-3-lt">日</td>

										<td>月</td>

										<td>火</td>

										<td>水</td>

										<td>木</td>

										<td>金</td>

										<td class="bg-4-lt">土</td>

								</tr>



									 	<tr class="ref_sche">
									 		<th height="34" class="sub mh30 bg-2-lt">函館</th>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

										</tr>



									 	<tr class="ref_sche">
									 		<th height="34" class="sub mh30 bg-2-lt">青森</th>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-morning.png?20220510132530" width="10" height="10" alt="ﾓｰﾆﾝｸﾞ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-morning.png?20220510132530" width="10" height="10" alt="ﾓｰﾆﾝｸﾞ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-morning.png?20220510132530" width="10" height="10" alt="ﾓｰﾆﾝｸﾞ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

										</tr>



									 	<tr class="ref_sche">
									 		<th height="34" class="sub mh30 bg-2-lt">いわき平</th>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-night3.gif?20220510132532" width="10" height="10" alt="ﾅｲﾀｰ"  class="mT2"/>


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-night3.gif?20220510132532" width="10" height="10" alt="ﾅｲﾀｰ"  class="mT2"/>


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-night3.gif?20220510132532" width="10" height="10" alt="ﾅｲﾀｰ"  class="mT2"/>


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-midnight3.gif?20220510132533" width="10" height="10" alt="ﾐｯﾄﾞﾅｲﾄ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-midnight3.gif?20220510132533" width="10" height="10" alt="ﾐｯﾄﾞﾅｲﾄ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-midnight3.gif?20220510132533" width="10" height="10" alt="ﾐｯﾄﾞﾅｲﾄ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-night3.gif?20220510132532" width="10" height="10" alt="ﾅｲﾀｰ"  class="mT2"/>


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

										</tr>


















































































						    </table>


					   		<div id="area_02" ></div>
					    	<table class="tb10 w980px mT20 noborder imgM1 ref_sche">
								<tr class="noborder">

									<th class="noborder"/>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

								</tr>

								<tr class="ref_sche">
									<th width="7%" rowspan="2" >関東</th>

										<th width="3%">1</th>

										<th width="3%" class="bg-4-lt">2</th>

										<th width="3%" class="bg-3-lt">3</th>

										<th width="3%" class="bg-3-lt">4</th>

										<th width="3%">5</th>

										<th width="3%">6</th>

										<th width="3%">7</th>

										<th width="3%">8</th>

										<th width="3%" class="bg-4-lt">9</th>

										<th width="3%" class="bg-3-lt">10</th>

										<th width="3%">11</th>

										<th width="3%">12</th>

										<th width="3%">13</th>

										<th width="3%">14</th>

										<th width="3%">15</th>

										<th width="3%" class="bg-4-lt">16</th>

										<th width="3%" class="bg-3-lt">17</th>

										<th width="3%">18</th>

										<th width="3%">19</th>

										<th width="3%">20</th>

										<th width="3%">21</th>

										<th width="3%">22</th>

										<th width="3%" class="bg-3-lt">23</th>

										<th width="3%" class="bg-3-lt">24</th>

										<th width="3%">25</th>

										<th width="3%">26</th>

										<th width="3%">27</th>

										<th width="3%">28</th>

										<th width="3%">29</th>

										<th width="3%" class="bg-4-lt">30</th>

								</tr>

								<tr class="ref_sche_week" id="targetBox5">

										<td>金</td>

										<td class="bg-4-lt">土</td>

										<td class="bg-3-lt">日</td>

										<td class="bg-3-lt">月</td>

										<td>火</td>

										<td>水</td>

										<td>木</td>

										<td>金</td>

										<td class="bg-4-lt">土</td>

										<td class="bg-3-lt">日</td>

										<td>月</td>

										<td>火</td>

										<td>水</td>

										<td>木</td>

										<td>金</td>

										<td class="bg-4-lt">土</td>

										<td class="bg-3-lt">日</td>

										<td>月</td>

										<td>火</td>

										<td>水</td>

										<td>木</td>

										<td>金</td>

										<td class="bg-3-lt">土</td>

										<td class="bg-3-lt">日</td>

										<td>月</td>

										<td>火</td>

										<td>水</td>

										<td>木</td>

										<td>金</td>

										<td class="bg-4-lt">土</td>

								</tr>









									 	<tr class="ref_sche">
									 		<th height="34" class="sub mh30 bg-2-lt">弥彦</th>

												<td >
													<div class="grade">
														<div class="time">


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

										</tr>



									 	<tr class="ref_sche">
									 		<th height="34" class="sub mh30 bg-2-lt">前橋</th>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-midnight3.gif?20220510132533" width="10" height="10" alt="ﾐｯﾄﾞﾅｲﾄ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-night3.gif?20220510132532" width="10" height="10" alt="ﾅｲﾀｰ"  class="mT2"/>


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-night3.gif?20220510132532" width="10" height="10" alt="ﾅｲﾀｰ"  class="mT2"/>


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-night3.gif?20220510132532" width="10" height="10" alt="ﾅｲﾀｰ"  class="mT2"/>


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-midnight3.gif?20220510132533" width="10" height="10" alt="ﾐｯﾄﾞﾅｲﾄ"  class="mT2"/>


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-midnight3.gif?20220510132533" width="10" height="10" alt="ﾐｯﾄﾞﾅｲﾄ"  class="mT2"/>


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-midnight3.gif?20220510132533" width="10" height="10" alt="ﾐｯﾄﾞﾅｲﾄ"  class="mT2"/>


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

										</tr>



									 	<tr class="ref_sche">
									 		<th height="34" class="sub mh30 bg-2-lt">取手</th>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-morning.png?20220510132530" width="10" height="10" alt="ﾓｰﾆﾝｸﾞ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-morning.png?20220510132530" width="10" height="10" alt="ﾓｰﾆﾝｸﾞ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-morning.png?20220510132530" width="10" height="10" alt="ﾓｰﾆﾝｸﾞ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

										</tr>



									 	<tr class="ref_sche">
									 		<th height="34" class="sub mh30 bg-2-lt">宇都宮</th>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

										</tr>



									 	<tr class="ref_sche">
									 		<th height="34" class="sub mh30 bg-2-lt">大宮</th>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

										</tr>



									 	<tr class="ref_sche">
									 		<th height="34" class="sub mh30 bg-2-lt">西武園</th>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-morning.png?20220510132530" width="10" height="10" alt="ﾓｰﾆﾝｸﾞ"  class="mT2"/>


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-morning.png?20220510132530" width="10" height="10" alt="ﾓｰﾆﾝｸﾞ"  class="mT2"/>


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-morning.png?20220510132530" width="10" height="10" alt="ﾓｰﾆﾝｸﾞ"  class="mT2"/>


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-midnight3.gif?20220510132533" width="10" height="10" alt="ﾐｯﾄﾞﾅｲﾄ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-midnight3.gif?20220510132533" width="10" height="10" alt="ﾐｯﾄﾞﾅｲﾄ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-midnight3.gif?20220510132533" width="10" height="10" alt="ﾐｯﾄﾞﾅｲﾄ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-night3.gif?20220510132532" width="10" height="10" alt="ﾅｲﾀｰ"  class="mT2"/>


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-night3.gif?20220510132532" width="10" height="10" alt="ﾅｲﾀｰ"  class="mT2"/>


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

										</tr>



									 	<tr class="ref_sche">
									 		<th height="34" class="sub mh30 bg-2-lt">京王閣</th>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-midnight3.gif?20220510132533" width="10" height="10" alt="ﾐｯﾄﾞﾅｲﾄ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-midnight3.gif?20220510132533" width="10" height="10" alt="ﾐｯﾄﾞﾅｲﾄ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-midnight3.gif?20220510132533" width="10" height="10" alt="ﾐｯﾄﾞﾅｲﾄ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-night3.gif?20220510132532" width="10" height="10" alt="ﾅｲﾀｰ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-night3.gif?20220510132532" width="10" height="10" alt="ﾅｲﾀｰ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-night3.gif?20220510132532" width="10" height="10" alt="ﾅｲﾀｰ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-midnight3.gif?20220510132533" width="10" height="10" alt="ﾐｯﾄﾞﾅｲﾄ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

										</tr>



									 	<tr class="ref_sche">
									 		<th height="34" class="sub mh30 bg-2-lt">立川</th>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

										</tr>


































































						    </table>


					   		<div id="area_03" ></div>
					    	<table class="tb10 w980px mT20 noborder imgM1 ref_sche">
								<tr class="noborder">

									<th class="noborder"/>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

								</tr>

								<tr class="ref_sche">
									<th width="7%" rowspan="2" >南関東</th>

										<th width="3%">1</th>

										<th width="3%" class="bg-4-lt">2</th>

										<th width="3%" class="bg-3-lt">3</th>

										<th width="3%" class="bg-3-lt">4</th>

										<th width="3%">5</th>

										<th width="3%">6</th>

										<th width="3%">7</th>

										<th width="3%">8</th>

										<th width="3%" class="bg-4-lt">9</th>

										<th width="3%" class="bg-3-lt">10</th>

										<th width="3%">11</th>

										<th width="3%">12</th>

										<th width="3%">13</th>

										<th width="3%">14</th>

										<th width="3%">15</th>

										<th width="3%" class="bg-4-lt">16</th>

										<th width="3%" class="bg-3-lt">17</th>

										<th width="3%">18</th>

										<th width="3%">19</th>

										<th width="3%">20</th>

										<th width="3%">21</th>

										<th width="3%">22</th>

										<th width="3%" class="bg-3-lt">23</th>

										<th width="3%" class="bg-3-lt">24</th>

										<th width="3%">25</th>

										<th width="3%">26</th>

										<th width="3%">27</th>

										<th width="3%">28</th>

										<th width="3%">29</th>

										<th width="3%" class="bg-4-lt">30</th>

								</tr>

								<tr class="ref_sche_week" id="targetBox5">

										<td>金</td>

										<td class="bg-4-lt">土</td>

										<td class="bg-3-lt">日</td>

										<td class="bg-3-lt">月</td>

										<td>火</td>

										<td>水</td>

										<td>木</td>

										<td>金</td>

										<td class="bg-4-lt">土</td>

										<td class="bg-3-lt">日</td>

										<td>月</td>

										<td>火</td>

										<td>水</td>

										<td>木</td>

										<td>金</td>

										<td class="bg-4-lt">土</td>

										<td class="bg-3-lt">日</td>

										<td>月</td>

										<td>火</td>

										<td>水</td>

										<td>木</td>

										<td>金</td>

										<td class="bg-3-lt">土</td>

										<td class="bg-3-lt">日</td>

										<td>月</td>

										<td>火</td>

										<td>水</td>

										<td>木</td>

										<td>金</td>

										<td class="bg-4-lt">土</td>

								</tr>

























									 	<tr class="ref_sche">
									 		<th height="34" class="sub mh30 bg-2-lt">松戸</th>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-night3.gif?20220510132532" width="10" height="10" alt="ﾅｲﾀｰ"  class="mT2"/>


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-midnight3.gif?20220510132533" width="10" height="10" alt="ﾐｯﾄﾞﾅｲﾄ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-midnight3.gif?20220510132533" width="10" height="10" alt="ﾐｯﾄﾞﾅｲﾄ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-midnight3.gif?20220510132533" width="10" height="10" alt="ﾐｯﾄﾞﾅｲﾄ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-morning.png?20220510132530" width="10" height="10" alt="ﾓｰﾆﾝｸﾞ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-morning.png?20220510132530" width="10" height="10" alt="ﾓｰﾆﾝｸﾞ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-morning.png?20220510132530" width="10" height="10" alt="ﾓｰﾆﾝｸﾞ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-night3.gif?20220510132532" width="10" height="10" alt="ﾅｲﾀｰ"  class="mT2"/>


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-night3.gif?20220510132532" width="10" height="10" alt="ﾅｲﾀｰ"  class="mT2"/>


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-night3.gif?20220510132532" width="10" height="10" alt="ﾅｲﾀｰ"  class="mT2"/>


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

										</tr>



									 	<tr class="ref_sche">
									 		<th height="34" class="sub mh30 bg-2-lt">千葉</th>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

										</tr>



									 	<tr class="ref_sche">
									 		<th height="34" class="sub mh30 bg-2-lt">川崎</th>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-midnight3.gif?20220510132533" width="10" height="10" alt="ﾐｯﾄﾞﾅｲﾄ"  class="mT2"/>


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-midnight3.gif?20220510132533" width="10" height="10" alt="ﾐｯﾄﾞﾅｲﾄ"  class="mT2"/>


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-midnight3.gif?20220510132533" width="10" height="10" alt="ﾐｯﾄﾞﾅｲﾄ"  class="mT2"/>


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-midnight3.gif?20220510132533" width="10" height="10" alt="ﾐｯﾄﾞﾅｲﾄ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-midnight3.gif?20220510132533" width="10" height="10" alt="ﾐｯﾄﾞﾅｲﾄ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-midnight3.gif?20220510132533" width="10" height="10" alt="ﾐｯﾄﾞﾅｲﾄ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-midnight3.gif?20220510132533" width="10" height="10" alt="ﾐｯﾄﾞﾅｲﾄ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

										</tr>



									 	<tr class="ref_sche">
									 		<th height="34" class="sub mh30 bg-2-lt">平塚</th>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-night3.gif?20220510132532" width="10" height="10" alt="ﾅｲﾀｰ"  class="mT2"/>


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-night3.gif?20220510132532" width="10" height="10" alt="ﾅｲﾀｰ"  class="mT2"/>


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-night3.gif?20220510132532" width="10" height="10" alt="ﾅｲﾀｰ"  class="mT2"/>


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

										</tr>



									 	<tr class="ref_sche">
									 		<th height="34" class="sub mh30 bg-2-lt">小田原</th>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

										</tr>



									 	<tr class="ref_sche">
									 		<th height="34" class="sub mh30 bg-2-lt">伊東</th>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-midnight3.gif?20220510132533" width="10" height="10" alt="ﾐｯﾄﾞﾅｲﾄ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-midnight3.gif?20220510132533" width="10" height="10" alt="ﾐｯﾄﾞﾅｲﾄ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-midnight3.gif?20220510132533" width="10" height="10" alt="ﾐｯﾄﾞﾅｲﾄ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-morning.png?20220510132530" width="10" height="10" alt="ﾓｰﾆﾝｸﾞ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

										</tr>



									 	<tr class="ref_sche">
									 		<th height="34" class="sub mh30 bg-2-lt">静岡</th>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

										</tr>




















































						    </table>


					   		<div id="area_04" ></div>
					    	<table class="tb10 w980px mT20 noborder imgM1 ref_sche">
								<tr class="noborder">

									<th class="noborder"/>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

								</tr>

								<tr class="ref_sche">
									<th width="7%" rowspan="2" >中部</th>

										<th width="3%">1</th>

										<th width="3%" class="bg-4-lt">2</th>

										<th width="3%" class="bg-3-lt">3</th>

										<th width="3%" class="bg-3-lt">4</th>

										<th width="3%">5</th>

										<th width="3%">6</th>

										<th width="3%">7</th>

										<th width="3%">8</th>

										<th width="3%" class="bg-4-lt">9</th>

										<th width="3%" class="bg-3-lt">10</th>

										<th width="3%">11</th>

										<th width="3%">12</th>

										<th width="3%">13</th>

										<th width="3%">14</th>

										<th width="3%">15</th>

										<th width="3%" class="bg-4-lt">16</th>

										<th width="3%" class="bg-3-lt">17</th>

										<th width="3%">18</th>

										<th width="3%">19</th>

										<th width="3%">20</th>

										<th width="3%">21</th>

										<th width="3%">22</th>

										<th width="3%" class="bg-3-lt">23</th>

										<th width="3%" class="bg-3-lt">24</th>

										<th width="3%">25</th>

										<th width="3%">26</th>

										<th width="3%">27</th>

										<th width="3%">28</th>

										<th width="3%">29</th>

										<th width="3%" class="bg-4-lt">30</th>

								</tr>

								<tr class="ref_sche_week" id="targetBox5">

										<td>金</td>

										<td class="bg-4-lt">土</td>

										<td class="bg-3-lt">日</td>

										<td class="bg-3-lt">月</td>

										<td>火</td>

										<td>水</td>

										<td>木</td>

										<td>金</td>

										<td class="bg-4-lt">土</td>

										<td class="bg-3-lt">日</td>

										<td>月</td>

										<td>火</td>

										<td>水</td>

										<td>木</td>

										<td>金</td>

										<td class="bg-4-lt">土</td>

										<td class="bg-3-lt">日</td>

										<td>月</td>

										<td>火</td>

										<td>水</td>

										<td>木</td>

										<td>金</td>

										<td class="bg-3-lt">土</td>

										<td class="bg-3-lt">日</td>

										<td>月</td>

										<td>火</td>

										<td>水</td>

										<td>木</td>

										<td>金</td>

										<td class="bg-4-lt">土</td>

								</tr>







































									 	<tr class="ref_sche">
									 		<th height="34" class="sub mh30 bg-2-lt">名古屋</th>

												<td >
													<div class="grade">
														<div class="time">


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

										</tr>



									 	<tr class="ref_sche">
									 		<th height="34" class="sub mh30 bg-2-lt">岐阜</th>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-night3.gif?20220510132532" width="10" height="10" alt="ﾅｲﾀｰ"  class="mT2"/>


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-night3.gif?20220510132532" width="10" height="10" alt="ﾅｲﾀｰ"  class="mT2"/>


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-night3.gif?20220510132532" width="10" height="10" alt="ﾅｲﾀｰ"  class="mT2"/>


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-midnight3.gif?20220510132533" width="10" height="10" alt="ﾐｯﾄﾞﾅｲﾄ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-midnight3.gif?20220510132533" width="10" height="10" alt="ﾐｯﾄﾞﾅｲﾄ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-midnight3.gif?20220510132533" width="10" height="10" alt="ﾐｯﾄﾞﾅｲﾄ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

										</tr>



									 	<tr class="ref_sche">
									 		<th height="34" class="sub mh30 bg-2-lt">大垣</th>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-midnight3.gif?20220510132533" width="10" height="10" alt="ﾐｯﾄﾞﾅｲﾄ"  class="mT2"/>


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-midnight3.gif?20220510132533" width="10" height="10" alt="ﾐｯﾄﾞﾅｲﾄ"  class="mT2"/>


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-midnight3.gif?20220510132533" width="10" height="10" alt="ﾐｯﾄﾞﾅｲﾄ"  class="mT2"/>


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-midnight3.gif?20220510132533" width="10" height="10" alt="ﾐｯﾄﾞﾅｲﾄ"  class="mT2"/>


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-midnight3.gif?20220510132533" width="10" height="10" alt="ﾐｯﾄﾞﾅｲﾄ"  class="mT2"/>


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-midnight3.gif?20220510132533" width="10" height="10" alt="ﾐｯﾄﾞﾅｲﾄ"  class="mT2"/>


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_g3.gif?20220510132531" width="22" height="14" alt="G3" />



													</div>
												</td>

										</tr>



									 	<tr class="ref_sche">
									 		<th height="34" class="sub mh30 bg-2-lt">豊橋</th>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-morning.png?20220510132530" width="10" height="10" alt="ﾓｰﾆﾝｸﾞ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-morning.png?20220510132530" width="10" height="10" alt="ﾓｰﾆﾝｸﾞ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-morning.png?20220510132530" width="10" height="10" alt="ﾓｰﾆﾝｸﾞ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-midnight3.gif?20220510132533" width="10" height="10" alt="ﾐｯﾄﾞﾅｲﾄ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-midnight3.gif?20220510132533" width="10" height="10" alt="ﾐｯﾄﾞﾅｲﾄ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-midnight3.gif?20220510132533" width="10" height="10" alt="ﾐｯﾄﾞﾅｲﾄ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

										</tr>



									 	<tr class="ref_sche">
									 		<th height="34" class="sub mh30 bg-2-lt">富山</th>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

										</tr>



									 	<tr class="ref_sche">
									 		<th height="34" class="sub mh30 bg-2-lt">松阪</th>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-midnight3.gif?20220510132533" width="10" height="10" alt="ﾐｯﾄﾞﾅｲﾄ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-night3.gif?20220510132532" width="10" height="10" alt="ﾅｲﾀｰ"  class="mT2"/>


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-night3.gif?20220510132532" width="10" height="10" alt="ﾅｲﾀｰ"  class="mT2"/>


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-night3.gif?20220510132532" width="10" height="10" alt="ﾅｲﾀｰ"  class="mT2"/>


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_g3.gif?20220510132531" width="22" height="14" alt="G3" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_g3.gif?20220510132531" width="22" height="14" alt="G3" />



													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_g3.gif?20220510132531" width="22" height="14" alt="G3" />



													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_g3.gif?20220510132531" width="22" height="14" alt="G3" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-midnight3.gif?20220510132533" width="10" height="10" alt="ﾐｯﾄﾞﾅｲﾄ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-midnight3.gif?20220510132533" width="10" height="10" alt="ﾐｯﾄﾞﾅｲﾄ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-midnight3.gif?20220510132533" width="10" height="10" alt="ﾐｯﾄﾞﾅｲﾄ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

										</tr>



									 	<tr class="ref_sche">
									 		<th height="34" class="sub mh30 bg-2-lt">四日市</th>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-midnight3.gif?20220510132533" width="10" height="10" alt="ﾐｯﾄﾞﾅｲﾄ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-night3.gif?20220510132532" width="10" height="10" alt="ﾅｲﾀｰ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_g3.gif?20220510132531" width="22" height="14" alt="G3" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-night3.gif?20220510132532" width="10" height="10" alt="ﾅｲﾀｰ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_g3.gif?20220510132531" width="22" height="14" alt="G3" />



													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-night3.gif?20220510132532" width="10" height="10" alt="ﾅｲﾀｰ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_g3.gif?20220510132531" width="22" height="14" alt="G3" />



													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-night3.gif?20220510132532" width="10" height="10" alt="ﾅｲﾀｰ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_g3.gif?20220510132531" width="22" height="14" alt="G3" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

										</tr>






































						    </table>


					   		<div id="area_05" ></div>
					    	<table class="tb10 w980px mT20 noborder imgM1 ref_sche">
								<tr class="noborder">

									<th class="noborder"/>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

								</tr>

								<tr class="ref_sche">
									<th width="7%" rowspan="2" >近畿</th>

										<th width="3%">1</th>

										<th width="3%" class="bg-4-lt">2</th>

										<th width="3%" class="bg-3-lt">3</th>

										<th width="3%" class="bg-3-lt">4</th>

										<th width="3%">5</th>

										<th width="3%">6</th>

										<th width="3%">7</th>

										<th width="3%">8</th>

										<th width="3%" class="bg-4-lt">9</th>

										<th width="3%" class="bg-3-lt">10</th>

										<th width="3%">11</th>

										<th width="3%">12</th>

										<th width="3%">13</th>

										<th width="3%">14</th>

										<th width="3%">15</th>

										<th width="3%" class="bg-4-lt">16</th>

										<th width="3%" class="bg-3-lt">17</th>

										<th width="3%">18</th>

										<th width="3%">19</th>

										<th width="3%">20</th>

										<th width="3%">21</th>

										<th width="3%">22</th>

										<th width="3%" class="bg-3-lt">23</th>

										<th width="3%" class="bg-3-lt">24</th>

										<th width="3%">25</th>

										<th width="3%">26</th>

										<th width="3%">27</th>

										<th width="3%">28</th>

										<th width="3%">29</th>

										<th width="3%" class="bg-4-lt">30</th>

								</tr>

								<tr class="ref_sche_week" id="targetBox5">

										<td>金</td>

										<td class="bg-4-lt">土</td>

										<td class="bg-3-lt">日</td>

										<td class="bg-3-lt">月</td>

										<td>火</td>

										<td>水</td>

										<td>木</td>

										<td>金</td>

										<td class="bg-4-lt">土</td>

										<td class="bg-3-lt">日</td>

										<td>月</td>

										<td>火</td>

										<td>水</td>

										<td>木</td>

										<td>金</td>

										<td class="bg-4-lt">土</td>

										<td class="bg-3-lt">日</td>

										<td>月</td>

										<td>火</td>

										<td>水</td>

										<td>木</td>

										<td>金</td>

										<td class="bg-3-lt">土</td>

										<td class="bg-3-lt">日</td>

										<td>月</td>

										<td>火</td>

										<td>水</td>

										<td>木</td>

										<td>金</td>

										<td class="bg-4-lt">土</td>

								</tr>





















































									 	<tr class="ref_sche">
									 		<th height="34" class="sub mh30 bg-2-lt">福井</th>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

										</tr>



									 	<tr class="ref_sche">
									 		<th height="34" class="sub mh30 bg-2-lt">奈良</th>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-night3.gif?20220510132532" width="10" height="10" alt="ﾅｲﾀｰ"  class="mT2"/>


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-night3.gif?20220510132532" width="10" height="10" alt="ﾅｲﾀｰ"  class="mT2"/>


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-night3.gif?20220510132532" width="10" height="10" alt="ﾅｲﾀｰ"  class="mT2"/>


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-night3.gif?20220510132532" width="10" height="10" alt="ﾅｲﾀｰ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-night3.gif?20220510132532" width="10" height="10" alt="ﾅｲﾀｰ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-night3.gif?20220510132532" width="10" height="10" alt="ﾅｲﾀｰ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

										</tr>



									 	<tr class="ref_sche">
									 		<th height="34" class="sub mh30 bg-2-lt">向日町</th>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

										</tr>



									 	<tr class="ref_sche">
									 		<th height="34" class="sub mh30 bg-2-lt">和歌山</th>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-morning.png?20220510132530" width="10" height="10" alt="ﾓｰﾆﾝｸﾞ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-morning.png?20220510132530" width="10" height="10" alt="ﾓｰﾆﾝｸﾞ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

										</tr>



									 	<tr class="ref_sche">
									 		<th height="34" class="sub mh30 bg-2-lt">岸和田</th>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

										</tr>




























						    </table>


					   		<div id="area_06" ></div>
					    	<table class="tb10 w980px mT20 noborder imgM1 ref_sche">
								<tr class="noborder">

									<th class="noborder"/>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

								</tr>

								<tr class="ref_sche">
									<th width="7%" rowspan="2" >中国</th>

										<th width="3%">1</th>

										<th width="3%" class="bg-4-lt">2</th>

										<th width="3%" class="bg-3-lt">3</th>

										<th width="3%" class="bg-3-lt">4</th>

										<th width="3%">5</th>

										<th width="3%">6</th>

										<th width="3%">7</th>

										<th width="3%">8</th>

										<th width="3%" class="bg-4-lt">9</th>

										<th width="3%" class="bg-3-lt">10</th>

										<th width="3%">11</th>

										<th width="3%">12</th>

										<th width="3%">13</th>

										<th width="3%">14</th>

										<th width="3%">15</th>

										<th width="3%" class="bg-4-lt">16</th>

										<th width="3%" class="bg-3-lt">17</th>

										<th width="3%">18</th>

										<th width="3%">19</th>

										<th width="3%">20</th>

										<th width="3%">21</th>

										<th width="3%">22</th>

										<th width="3%" class="bg-3-lt">23</th>

										<th width="3%" class="bg-3-lt">24</th>

										<th width="3%">25</th>

										<th width="3%">26</th>

										<th width="3%">27</th>

										<th width="3%">28</th>

										<th width="3%">29</th>

										<th width="3%" class="bg-4-lt">30</th>

								</tr>

								<tr class="ref_sche_week" id="targetBox5">

										<td>金</td>

										<td class="bg-4-lt">土</td>

										<td class="bg-3-lt">日</td>

										<td class="bg-3-lt">月</td>

										<td>火</td>

										<td>水</td>

										<td>木</td>

										<td>金</td>

										<td class="bg-4-lt">土</td>

										<td class="bg-3-lt">日</td>

										<td>月</td>

										<td>火</td>

										<td>水</td>

										<td>木</td>

										<td>金</td>

										<td class="bg-4-lt">土</td>

										<td class="bg-3-lt">日</td>

										<td>月</td>

										<td>火</td>

										<td>水</td>

										<td>木</td>

										<td>金</td>

										<td class="bg-3-lt">土</td>

										<td class="bg-3-lt">日</td>

										<td>月</td>

										<td>火</td>

										<td>水</td>

										<td>木</td>

										<td>金</td>

										<td class="bg-4-lt">土</td>

								</tr>































































									 	<tr class="ref_sche">
									 		<th height="34" class="sub mh30 bg-2-lt">玉野</th>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

										</tr>



									 	<tr class="ref_sche">
									 		<th height="34" class="sub mh30 bg-2-lt">広島</th>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

										</tr>



									 	<tr class="ref_sche">
									 		<th height="34" class="sub mh30 bg-2-lt">防府</th>

												<td >
													<div class="grade">
														<div class="time">


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_g3.gif?20220510132531" width="22" height="14" alt="G3" />



													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_g3.gif?20220510132531" width="22" height="14" alt="G3" />



													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_g3.gif?20220510132531" width="22" height="14" alt="G3" />



													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_g3.gif?20220510132531" width="22" height="14" alt="G3" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-morning.png?20220510132530" width="10" height="10" alt="ﾓｰﾆﾝｸﾞ"  class="mT2"/>


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-morning.png?20220510132530" width="10" height="10" alt="ﾓｰﾆﾝｸﾞ"  class="mT2"/>


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-morning.png?20220510132530" width="10" height="10" alt="ﾓｰﾆﾝｸﾞ"  class="mT2"/>


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

										</tr>






















						    </table>


					   		<div id="area_07" ></div>
					    	<table class="tb10 w980px mT20 noborder imgM1 ref_sche">
								<tr class="noborder">

									<th class="noborder"/>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

								</tr>

								<tr class="ref_sche">
									<th width="7%" rowspan="2" >四国</th>

										<th width="3%">1</th>

										<th width="3%" class="bg-4-lt">2</th>

										<th width="3%" class="bg-3-lt">3</th>

										<th width="3%" class="bg-3-lt">4</th>

										<th width="3%">5</th>

										<th width="3%">6</th>

										<th width="3%">7</th>

										<th width="3%">8</th>

										<th width="3%" class="bg-4-lt">9</th>

										<th width="3%" class="bg-3-lt">10</th>

										<th width="3%">11</th>

										<th width="3%">12</th>

										<th width="3%">13</th>

										<th width="3%">14</th>

										<th width="3%">15</th>

										<th width="3%" class="bg-4-lt">16</th>

										<th width="3%" class="bg-3-lt">17</th>

										<th width="3%">18</th>

										<th width="3%">19</th>

										<th width="3%">20</th>

										<th width="3%">21</th>

										<th width="3%">22</th>

										<th width="3%" class="bg-3-lt">23</th>

										<th width="3%" class="bg-3-lt">24</th>

										<th width="3%">25</th>

										<th width="3%">26</th>

										<th width="3%">27</th>

										<th width="3%">28</th>

										<th width="3%">29</th>

										<th width="3%" class="bg-4-lt">30</th>

								</tr>

								<tr class="ref_sche_week" id="targetBox5">

										<td>金</td>

										<td class="bg-4-lt">土</td>

										<td class="bg-3-lt">日</td>

										<td class="bg-3-lt">月</td>

										<td>火</td>

										<td>水</td>

										<td>木</td>

										<td>金</td>

										<td class="bg-4-lt">土</td>

										<td class="bg-3-lt">日</td>

										<td>月</td>

										<td>火</td>

										<td>水</td>

										<td>木</td>

										<td>金</td>

										<td class="bg-4-lt">土</td>

										<td class="bg-3-lt">日</td>

										<td>月</td>

										<td>火</td>

										<td>水</td>

										<td>木</td>

										<td>金</td>

										<td class="bg-3-lt">土</td>

										<td class="bg-3-lt">日</td>

										<td>月</td>

										<td>火</td>

										<td>水</td>

										<td>木</td>

										<td>金</td>

										<td class="bg-4-lt">土</td>

								</tr>





































































									 	<tr class="ref_sche">
									 		<th height="34" class="sub mh30 bg-2-lt">高松</th>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-midnight3.gif?20220510132533" width="10" height="10" alt="ﾐｯﾄﾞﾅｲﾄ"  class="mT2"/>


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-midnight3.gif?20220510132533" width="10" height="10" alt="ﾐｯﾄﾞﾅｲﾄ"  class="mT2"/>


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-midnight3.gif?20220510132533" width="10" height="10" alt="ﾐｯﾄﾞﾅｲﾄ"  class="mT2"/>


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-morning.png?20220510132530" width="10" height="10" alt="ﾓｰﾆﾝｸﾞ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-morning.png?20220510132530" width="10" height="10" alt="ﾓｰﾆﾝｸﾞ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-morning.png?20220510132530" width="10" height="10" alt="ﾓｰﾆﾝｸﾞ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-midnight3.gif?20220510132533" width="10" height="10" alt="ﾐｯﾄﾞﾅｲﾄ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-midnight3.gif?20220510132533" width="10" height="10" alt="ﾐｯﾄﾞﾅｲﾄ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-midnight3.gif?20220510132533" width="10" height="10" alt="ﾐｯﾄﾞﾅｲﾄ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

										</tr>



									 	<tr class="ref_sche">
									 		<th height="34" class="sub mh30 bg-2-lt">小松島</th>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-midnight3.gif?20220510132533" width="10" height="10" alt="ﾐｯﾄﾞﾅｲﾄ"  class="mT2"/>


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-midnight3.gif?20220510132533" width="10" height="10" alt="ﾐｯﾄﾞﾅｲﾄ"  class="mT2"/>


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-midnight3.gif?20220510132533" width="10" height="10" alt="ﾐｯﾄﾞﾅｲﾄ"  class="mT2"/>


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-midnight3.gif?20220510132533" width="10" height="10" alt="ﾐｯﾄﾞﾅｲﾄ"  class="mT2"/>


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-midnight3.gif?20220510132533" width="10" height="10" alt="ﾐｯﾄﾞﾅｲﾄ"  class="mT2"/>


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-midnight3.gif?20220510132533" width="10" height="10" alt="ﾐｯﾄﾞﾅｲﾄ"  class="mT2"/>


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

										</tr>



									 	<tr class="ref_sche">
									 		<th height="34" class="sub mh30 bg-2-lt">高知</th>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

										</tr>



									 	<tr class="ref_sche">
									 		<th height="34" class="sub mh30 bg-2-lt">松山</th>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-midnight3.gif?20220510132533" width="10" height="10" alt="ﾐｯﾄﾞﾅｲﾄ"  class="mT2"/>


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-midnight3.gif?20220510132533" width="10" height="10" alt="ﾐｯﾄﾞﾅｲﾄ"  class="mT2"/>


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-midnight3.gif?20220510132533" width="10" height="10" alt="ﾐｯﾄﾞﾅｲﾄ"  class="mT2"/>


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

										</tr>














						    </table>


					   		<div id="area_08" ></div>
					    	<table class="tb10 w980px mT20 noborder imgM1 ref_sche">
								<tr class="noborder">

									<th class="noborder"/>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

										<th class="noborder">



												<img src="/ud_shared/pc/keirin/keirin/shared/images/spacer.gif?20220510132531" width="19" height="17"/>

										</th>

								</tr>

								<tr class="ref_sche">
									<th width="7%" rowspan="2" >九州</th>

										<th width="3%">1</th>

										<th width="3%" class="bg-4-lt">2</th>

										<th width="3%" class="bg-3-lt">3</th>

										<th width="3%" class="bg-3-lt">4</th>

										<th width="3%">5</th>

										<th width="3%">6</th>

										<th width="3%">7</th>

										<th width="3%">8</th>

										<th width="3%" class="bg-4-lt">9</th>

										<th width="3%" class="bg-3-lt">10</th>

										<th width="3%">11</th>

										<th width="3%">12</th>

										<th width="3%">13</th>

										<th width="3%">14</th>

										<th width="3%">15</th>

										<th width="3%" class="bg-4-lt">16</th>

										<th width="3%" class="bg-3-lt">17</th>

										<th width="3%">18</th>

										<th width="3%">19</th>

										<th width="3%">20</th>

										<th width="3%">21</th>

										<th width="3%">22</th>

										<th width="3%" class="bg-3-lt">23</th>

										<th width="3%" class="bg-3-lt">24</th>

										<th width="3%">25</th>

										<th width="3%">26</th>

										<th width="3%">27</th>

										<th width="3%">28</th>

										<th width="3%">29</th>

										<th width="3%" class="bg-4-lt">30</th>

								</tr>

								<tr class="ref_sche_week" id="targetBox5">

										<td>金</td>

										<td class="bg-4-lt">土</td>

										<td class="bg-3-lt">日</td>

										<td class="bg-3-lt">月</td>

										<td>火</td>

										<td>水</td>

										<td>木</td>

										<td>金</td>

										<td class="bg-4-lt">土</td>

										<td class="bg-3-lt">日</td>

										<td>月</td>

										<td>火</td>

										<td>水</td>

										<td>木</td>

										<td>金</td>

										<td class="bg-4-lt">土</td>

										<td class="bg-3-lt">日</td>

										<td>月</td>

										<td>火</td>

										<td>水</td>

										<td>木</td>

										<td>金</td>

										<td class="bg-3-lt">土</td>

										<td class="bg-3-lt">日</td>

										<td>月</td>

										<td>火</td>

										<td>水</td>

										<td>木</td>

										<td>金</td>

										<td class="bg-4-lt">土</td>

								</tr>













































































									 	<tr class="ref_sche">
									 		<th height="34" class="sub mh30 bg-2-lt">小倉</th>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-midnight3.gif?20220510132533" width="10" height="10" alt="ﾐｯﾄﾞﾅｲﾄ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-midnight3.gif?20220510132533" width="10" height="10" alt="ﾐｯﾄﾞﾅｲﾄ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-midnight3.gif?20220510132533" width="10" height="10" alt="ﾐｯﾄﾞﾅｲﾄ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-night3.gif?20220510132532" width="10" height="10" alt="ﾅｲﾀｰ"  class="mT2"/>


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_g1.gif?20220510132532" width="22" height="14" alt="G1" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-night3.gif?20220510132532" width="10" height="10" alt="ﾅｲﾀｰ"  class="mT2"/>


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_g1.gif?20220510132532" width="22" height="14" alt="G1" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-night3.gif?20220510132532" width="10" height="10" alt="ﾅｲﾀｰ"  class="mT2"/>


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_g1.gif?20220510132532" width="22" height="14" alt="G1" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-night3.gif?20220510132532" width="10" height="10" alt="ﾅｲﾀｰ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_g1.gif?20220510132532" width="22" height="14" alt="G1" />



													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-night3.gif?20220510132532" width="10" height="10" alt="ﾅｲﾀｰ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_g1.gif?20220510132532" width="22" height="14" alt="G1" />



													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-night3.gif?20220510132532" width="10" height="10" alt="ﾅｲﾀｰ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_g1.gif?20220510132532" width="22" height="14" alt="G1" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-midnight3.gif?20220510132533" width="10" height="10" alt="ﾐｯﾄﾞﾅｲﾄ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

										</tr>



									 	<tr class="ref_sche">
									 		<th height="34" class="sub mh30 bg-2-lt">久留米</th>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

										</tr>



									 	<tr class="ref_sche">
									 		<th height="34" class="sub mh30 bg-2-lt">武雄</th>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-midnight3.gif?20220510132533" width="10" height="10" alt="ﾐｯﾄﾞﾅｲﾄ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-midnight3.gif?20220510132533" width="10" height="10" alt="ﾐｯﾄﾞﾅｲﾄ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-midnight3.gif?20220510132533" width="10" height="10" alt="ﾐｯﾄﾞﾅｲﾄ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

										</tr>



									 	<tr class="ref_sche">
									 		<th height="34" class="sub mh30 bg-2-lt">佐世保</th>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-night3.gif?20220510132532" width="10" height="10" alt="ﾅｲﾀｰ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-night3.gif?20220510132532" width="10" height="10" alt="ﾅｲﾀｰ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-night3.gif?20220510132532" width="10" height="10" alt="ﾅｲﾀｰ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-morning.png?20220510132530" width="10" height="10" alt="ﾓｰﾆﾝｸﾞ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-morning.png?20220510132530" width="10" height="10" alt="ﾓｰﾆﾝｸﾞ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-morning.png?20220510132530" width="10" height="10" alt="ﾓｰﾆﾝｸﾞ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-morning.png?20220510132530" width="10" height="10" alt="ﾓｰﾆﾝｸﾞ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-morning.png?20220510132530" width="10" height="10" alt="ﾓｰﾆﾝｸﾞ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-morning.png?20220510132530" width="10" height="10" alt="ﾓｰﾆﾝｸﾞ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

										</tr>



									 	<tr class="ref_sche">
									 		<th height="34" class="sub mh30 bg-2-lt">別府</th>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-morning.png?20220510132530" width="10" height="10" alt="ﾓｰﾆﾝｸﾞ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-morning.png?20220510132530" width="10" height="10" alt="ﾓｰﾆﾝｸﾞ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-morning.png?20220510132530" width="10" height="10" alt="ﾓｰﾆﾝｸﾞ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

										</tr>



									 	<tr class="ref_sche">
									 		<th height="34" class="sub mh30 bg-2-lt">熊本</th>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="10" height="10" alt="ｶﾞｰﾙｽﾞ" />

														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-morning.png?20220510132530" width="10" height="10" alt="ﾓｰﾆﾝｸﾞ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-morning.png?20220510132530" width="10" height="10" alt="ﾓｰﾆﾝｸﾞ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">

																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-morning.png?20220510132530" width="10" height="10" alt="ﾓｰﾆﾝｸﾞ"  class="mT2"/>


														</div>



																<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />



													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-3-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

												<td class="bg-4-lt" >
													<div class="grade">
														<div class="time">


														</div>


													</div>
												</td>

										</tr>


						    </table>


						<div class="bl-right mT5"><small>※ 天災等で日程が変更される場合もありますのでご注意ください。</small></div>

						<div class="w240px mT10 p3 bg-4-pl" style="border:1px solid #ccc;">
							<small>凡例</small><br />
							<table border="0" cellpadding="3" cellspacing="3" class="w230px" style="font-size:x-small; background:none;">
								<tr>
									<td class="w30px">
										<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_gp.gif?20220510132533" width="22" height="14" alt="GP" />
									</td>
									<td>GP</td>
									<td>
										<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-night3.gif?20220510132532" width="16" height="16" alt="ico" class="mT1 mR3" /> ナイター
									</td>
								</tr>
								<tr>
									<td class="al-left">
										<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_g1.gif?20220510132532" width="22" height="14" alt="G1" />
									</td>
									<td>GI</td>
									<td>
										<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-midnight3.gif?20220510132533" width="16" height="16" alt="ico" class="mT1 mR3" /> ミッドナイト
									</td>
								</tr>
								<tr>
									<td class="al-left">
										<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_g2.gif?20220510132532" width="22" height="14" alt="G2" />
									</td>
									<td>GII</td>
									<td>
										<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-morning.png?20220510132530" width="16" height="16" alt="ico" class="mT1 mR3" /> モーニング
									</td>
								</tr>
								<tr>
									<td class="al-left">
										<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_g3.gif?20220510132531" width="22" height="14" alt="G3" />
									</td>
									<td>GIII</td>
									<td>
										<img src="/ud_shared/pc/keirin/keirin/shared/images/ico-hakubo3.gif?20220510132532" width="16" height="16" alt="ico" class="mT1 mR3" /> サマータイム
									</td>
								</tr>
								<tr>
									<td class="al-left">
										<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f1.gif?20220510132530" width="22" height="14" alt="F1" />
									</td>
									<td>FI</td>
									<td>&nbsp;</td>
								</tr>
								<tr>
									<td class="al-left">
										<img src="/ud_shared/pc/keirin/keirin/shared/images/ico_f2.gif?20220510132531" width="22" height="14" alt="F2" />
									</td>
									<td>FII</td>
									<td>&nbsp;</td>
								</tr>
								<tr>
									<td class="al-left">
										<img class="mT1 mR3" src="/ud_shared/pc/keirin/keirin/shared/images/ico-girls.png?20220510132533" width="16" height="16" alt="ico" />
									</td>
									<td>ガールズ</td>
									<td>&nbsp;</td>
								</tr>
							</table>
						</div>

				</div>

			</div>


			<div class="clr">&nbsp;</div>


			<div id="footer">
				<div id="footerInner">
					<p id="copy">Copyright (C) Odds Park Corp. All Rights Reserved.</p>
					<ul id="footerNav">
						<li><a href="/service/company.html" onclick="window.open(this.href, '', 'width=631, height=500, menubar=no, toolbar=no, scrollbars=yes'); return false;">会社案内</a></li>
						<li><a href="/service/toiawase.pdf" target="_blank">特定商取引法に基づく表示</a></li>
						<li><a href="/service/sitepolicy.html" onclick="window.open(this.href, '', 'width=631, height=500, menubar=no, toolbar=no, scrollbars=yes'); return false;">サイトポリシー</a></li>
						<li><a href="/service/privacy.html" onclick="window.open(this.href, '', 'width=631, height=500, menubar=no, toolbar=no, scrollbars=yes'); return false;">個人情報保護方針</a></li>
						<li><a href="/service/information-security.html" onclick="window.open(this.href, '', 'width=631, height=500, menubar=no, toolbar=no, scrollbars=yes'); return false;">情報セキュリティ方針</a></li>
						<li><a href="/service/rule.html" onclick="window.open(this.href, '', 'width=631, height=500, menubar=no, toolbar=no, scrollbars=yes'); return false;">免責事項</a></li>
						<li><a href="/user/new/GoiInp.do" onclick="window.open(this.href, '', 'width=1020, height=740, menubar=no, toolbar=no, scrollbars=yes'); return false;">ご意見・ご要望</a></li>
						<li><a href="/service/link.html" onclick="window.open(this.href, '', 'width=1020, height=740, menubar=no, toolbar=no, scrollbars=yes'); return false;">リンク</a></li>
					</ul>
				</div>
				<!-- //footerInner -->
			</div>
			<!-- //footer -->

			<script type="text/javascript" src="/ud_shared/pc/keirin/keirin/shared/js/trace.js?20150326&20220510132531"></script>

			<!-- Google Tag Manager -->
			<noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-M5GLNZ"
			height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
			<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
			new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
			j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
			'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
			})(window,document,'script','dataLayer','GTM-M5GLNZ');</script>
			<!-- End Google Tag Manager -->

			<script type="text/javascript">
			(function () {
				var tagjs = document.createElement("script");
				var s = document.getElementsByTagName("script")[0];
				tagjs.async = true;
				tagjs.src = "//s.yjtag.jp/tag.js#site=mw1D83P";
				s.parentNode.insertBefore(tagjs, s);
			}());
			</script>
			<noscript>
			<iframe src="//b.yjtag.jp/iframe?c=mw1D83P" width="1" height="1" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
			</noscript>


		</div>

	<script type="text/javascript"  src="/rTbMCE026h_A4WgQls7F/iEbif49wzikV/DCRTdgwB/AFJVFy/IGYyYB"></script></body>
</html>`;

    /**
     * 競馬場開催データのHTMLを取得する
     *
     * @param date - 取得する年月
     * @returns Promise<string> - 競馬場開催データのHTML
     */
    @Logger
    getPlaceDataHtml(date: Date): Promise<string> {
        try {
            console.log(date);
            return Promise.resolve(this.testHtmlUrl);
        } catch (error) {
            console.debug('htmlを取得できませんでした', error);
            throw new Error('htmlを取得できませんでした');
        }
    }
}
