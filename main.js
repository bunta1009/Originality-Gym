// ハンバーガーメニュー
$(function () {
  $('.hamburger').on('click', function () {
    $('header').toggleClass('open');
  });

  // メニューのリンクをクリックしたら閉じる
  $('#navi a').on('click', function () {
    $('header').removeClass('open');
  });
});

// エリアマップモーダル
const modal = document.getElementById('modal');
const title = document.getElementById('modal-title');
const description = document.getElementById('modal-description');
const image = document.getElementById('modal-image');
const closeBtn = document.getElementById('modal-close');

const areaInfo = {
  studio: {
    title: "スタジオ",
    desc: "ヨガやダンスなどのグループレッスンが行われるスペースです。",
    img: "img/olga-pukhalskaya-lnlhc2qj8BE-unsplash.jpg"
  },
  stretch: {
    title: "ストレッチ・ヨガエリア",
    desc: "身体を整えるストレッチやリラックスできるヨガができる静かなエリアです。",
    img: "img/ヨガエリア.jpeg"
  },
  machine: {
    title: "マシンエリア",
    desc: "筋力トレーニング用の各種マシンが揃ったエリアです。",
    img: "img/マシンエリア.jpg"
  },
  shower: {
    title: "シャワー室",
    desc: "清潔なシャワー設備を完備。運動後にスッキリできます。",
    img: "img/onne-beauty-bXfGnlaNuM0-unsplash.jpg"
  },
  locker: {
    title: "ロッカー",
    desc: "荷物を安全に保管できるロッカーをご利用いただけます。",
    img: "img/ロッカー.jpg"
  },
  reception: {
    title: "受付",
    desc: "体験や入会、お問い合わせはこちらで対応します。",
    img: "img/受付.jpeg"
  },
  freewhight: {
    title: "フリーウェイトエリア",
    desc: "バーベルやダンベルを使って本格的にトレーニング可能。",
    img: "img/フリーウェイトエリア.jpg"
  },
  toilet: {
    title: "トイレ",
    desc: "いつも清潔に保たれた快適なトイレです。",
    img: "img/トイレ.jpg"
  },
  break: {
    title: "休憩エリア",
    desc: "リラックスできる空間で、水分補給や休憩をどうぞ。",
    img: "img/休憩エリア.jpeg"
  },
  changing: {
    title: "更衣室",
    desc: "運動前後の着替えにご利用いただけます。",
    img: "img/更衣室.jpg"
  }
};

document.querySelectorAll('svg a').forEach(link => {
  const href = link.getAttribute('xlink:href');
  const key = href.replace('#', '');

  if (areaInfo[key]) {
    link.addEventListener('click', e => {
      e.preventDefault();
      title.textContent = areaInfo[key].title;
      description.textContent = areaInfo[key].desc;
      image.src = areaInfo[key].img;
      image.alt = areaInfo[key].title;
      modal.classList.remove('hidden');
      setTimeout(() => {
        modal.classList.add('show'); // アニメーション用クラス追加
      }, 10); // 少し遅らせてアニメが走るように
    });
  }
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('show');
  setTimeout(() => modal.classList.add('hidden'), 300);
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('show');
    setTimeout(() => modal.classList.add('hidden'), 300);
  }
});


// services
//任意のタブにURLからリンクするための設定
function GethashID (hashIDName){
	if(hashIDName){
		//タブ設定
		$('.tab li').find('a').each(function() { //タブ内のaタグ全てを取得
			var idName = $(this).attr('href'); //タブ内のaタグのリンク名（例）#lunchの値を取得	
			if(idName == hashIDName){ //リンク元の指定されたURLのハッシュタグ（例）http://example.com/#lunch←この#の値とタブ内のリンク名（例）#lunchが同じかをチェック
				var parentElm = $(this).parent(); //タブ内のaタグの親要素（li）を取得
				$('.tab li').removeClass("active"); //タブ内のliについているactiveクラスを取り除き
				$(parentElm).addClass("active"); //リンク元の指定されたURLのハッシュタグとタブ内のリンク名が同じであれば、liにactiveクラスを追加
				//表示させるエリア設定
				$(".area").removeClass("is-active"); //もともとついているis-activeクラスを取り除き
				$(hashIDName).addClass("is-active"); //表示させたいエリアのタブリンク名をクリックしたら、表示エリアにis-activeクラスを追加	
			}
		});
	}
}

//タブをクリックしたら
$('.tab a').on('click', function() {
	var idName = $(this).attr('href'); //タブ内のリンク名を取得	
	GethashID (idName);//設定したタブの読み込みと
	return false;//aタグを無効にする
});


// 上記の動きをページが読み込まれたらすぐに動かす
$(window).on('load', function () {
    $('.tab li:first-of-type').addClass("active"); //最初のliにactiveクラスを追加
    $('.area:first-of-type').addClass("is-active"); //最初の.areaにis-activeクラスを追加
	var hashName = location.hash; //リンク元の指定されたURLのハッシュタグを取得
	GethashID (hashName);//設定したタブの読み込み
});

/*=================================================
  トップに戻る
  ===================================================*/
  let pagetop = $(".to-top");
  // 最初に画面が表示された時は、トップに戻るボタンを非表示に設定
  pagetop.hide();

  // スクロールイベント（スクロールされた際に実行）
  $(window).scroll(function () {
    // スクロール位置が700pxを超えた場合
    if ($(this).scrollTop() > 700) {
      // トップに戻るボタンを表示する
      pagetop.fadeIn();

      // スクロール位置が700px未満の場合
    } else {
      // トップに戻るボタンを非表示にする
      pagetop.fadeOut();
    }
  });

  // クリックイベント（ボタンがクリックされた際に実行）
  pagetop.click(function () {
    // 0.5秒かけてページトップへ移動
    $("body,html").animate({ scrollTop: 0 }, 500);

    // イベントが親要素へ伝播しないための記述
    // ※詳しく知りたい方は「イベント　バブリング」または「jQuery バブリング」で調べてみてください
    return false;
  });

  /*=================================================
  スムーススクロール
  ===================================================*/
  // ページ内リンクのイベント
  $('a[href^="#"]').click(function () {
    // aタグのhref属性の値が#で始まる要素をクリックした時に実行する
    // 'a[href^=#]'：「aタグのhref属性で値が#で始まる要素だったとき」

    // リンクを取得 クリックされたaタグのhref属性の中身をhrefという変数に代入する （#menuなど）をhrefという変数に代入する
    let href = $(this).attr("href");
    // this: クリックされたaタグ $('a[href^=#]')
    // .attr()は、要素の属性の値を取得する

    // ジャンプ先のid名をセット href == "#" 】 変数hrefの値が"#"【 || 】 または【href == ""】  であれば（【？】）
    // 【 $('html'); 】 へのリンク（≒ページトップ）,そうでなければ（【:】）【 $(href); 】 変数hrefの中身が到着地点になる
    let target = $(href == "#" || href == "" ? "html" : href);

    // トップからジャンプ先の要素までの距離を取得 （id=menuなどがページの一番上から何pxかを取得）
    let position = target.offset().top;
    // offset()は表示位置を取得する offset().topでページの一番上から何pxかを取得

    // animateでスムーススクロールを行う ページトップからpositionだけスクロールする
    // 600はスクロール速度で単位はミリ秒 swingはイージングのひとつ
    $("html, body").animate({ scrollTop: position }, 600, "swing");
    return false;
  });
  // {scrollTop:position}で、ページトップからposition分だけスクロールするという指定をしているいる。
  // linear：常に同じ速さで動く swing：始めはゆっくり動いて、途中はちょっと速め、最後はゆっくりと動く
  // 出発地点をクリックすると、URLの末尾にIDタグ(例.https://coffee.com#menu)が付与されてしまう。
  // これを防ぐために、最後に１文return falseを追加します。




