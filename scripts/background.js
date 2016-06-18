(function(){
  var GolfReader = function(){
    var url = 'http://www.pgatour.com/data/r/current/leaderboard-v2.json';
    var scoreHolder = $('.leaderboard');
    var open = '<tr>';
    var close = '<tr>';

    function performAjaxSetup(){
      $(document).ajaxStart(function(){
        $('#refresh').html('Loading.. Please Wait');
        $('#refresh').off();
      });

      $(document).ajaxComplete(function(event, xhr, settings){
        $('#refresh').html('Refresh');
        feed.bindUI();
      });
    }

    var feed = {
      xml:'',
      init:function(){
        this.bindUI();
        performAjaxSetup();
        this.loadFeed();
      },
      bindUI:function(){
        $('#refresh').on('click', function(){
          $('h1').remove();
          feed.loadFeed();
        });
      },
      loadFeed:function(){
        this.fetchFeed();
      },
      fetchFeed:function(){
        scoreHolder.empty();

        $.ajax({
          url:url,
          dataType:'json',
          method:'post',
          beforeSend:function(){ },
          success:function(xml){
            feed.populateExt(xml);
          },
          complete:function(){},
        });
      },
      populateExt:function(xml){
        var anchors = open;
        var something = [];
        $(xml).each(function(index, elem){
          var players = elem.leaderboard.players;
          $(players).each(function(k,v){
            var firstName = v.player_bio.first_name;
            var lastName = v.player_bio.last_name;
            var fullName = firstName + ' '+ lastName;
            console.log(v);
          })
        });
        anchors += close;
        scoreHolder.append('<thead class="head"><tr><th>Pos</th><th>Player</th><th>Today</th><th>Thru</th><th>Total</th></tr></thead>');
        scoreHolder.append(anchors);
      }
    };
    return feed;
  };
  $(function(){
    var Start = new GolfReader();
    Start.init();
  });

})();
