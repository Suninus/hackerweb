(function(s){TEMPLATES={"comments-toggle":new s({code:function(s,n,i){var t=this;t.b(i=i||"");t.b('<button class="comments-toggle">');t.b(t.v(t.f("comments_count",s,n,0)));t.b(" ");t.b(t.v(t.f("i_reply",s,n,0)));t.b("</button>");return t.fl()},partials:{},subs:{}}),comments:new s({code:function(s,n,i){var t=this;t.b(i=i||"");if(t.s(t.f("comments",s,n,1),s,n,0,13,130,"{{ }}")){t.rs(s,n,function(s,n,i){i.b('<li><p class="metadata"><b>');i.b(i.v(i.f("user",s,n,0)));i.b("</b> <time>");i.b(i.v(i.f("time_ago",s,n,0)));i.b("</time></p><p>");i.b(i.t(i.f("content",s,n,0)));i.b("<ul>");i.b(i.rp("<comments_list0",s,n,""));i.b("</ul></li>")});s.pop()}return t.fl()},partials:{"<comments_list0":{name:"comments_list",partials:{},subs:{}}},subs:{}}),"post-comments":new s({code:function(s,n,i){var t=this;t.b(i=i||"");t.b('<div class="post-content">');if(t.s(t.f("has_post",s,n,1),s,n,0,39,577,"{{ }}")){t.rs(s,n,function(s,n,i){i.b('<header><h1><a href="');i.b(i.v(i.f("url",s,n,0)));i.b('" target="_blank">');i.b(i.v(i.f("title",s,n,0)));i.b("<br>");if(i.s(i.f("user",s,n,1),s,n,0,107,170,"{{ }}")){i.rs(s,n,function(s,n,i){if(i.s(i.f("domain",s,n,1),s,n,0,118,159,"{{ }}")){i.rs(s,n,function(s,n,i){i.b('<span class="link-text">');i.b(i.v(i.f("domain",s,n,0)));i.b("</span>")});s.pop()}});s.pop()}i.b('</a></h1><p class="metadata">');if(i.s(i.f("user",s,n,1),s,n,0,217,412,"{{ }}")){i.rs(s,n,function(s,n,i){i.b('<span class="inline-block">');i.b(i.v(i.f("points",s,n,0)));i.b(" ");i.b(i.v(i.f("i_point",s,n,0)));i.b(" by ");i.b(i.v(i.f("user",s,n,0)));i.b('</span> <span class="inline-block">');i.b(i.v(i.f("time_ago",s,n,0)));if(i.s(i.f("comments_count",s,n,1),s,n,0,344,386,"{{ }}")){i.rs(s,n,function(s,n,i){i.b(" &middot; ");i.b(i.v(i.f("comments_count",s,n,0)));i.b(" ");i.b(i.v(i.f("i_comment",s,n,0)))});s.pop()}i.b("</span>")});s.pop()}if(!i.s(i.f("user",s,n,1),s,n,1,0,0,"")){i.b('<span class="inline-block">');i.b(i.v(i.f("time_ago",s,n,0)));i.b("</span>")}i.b('<a href="');i.b(i.v(i.f("hn_url",s,n,0)));i.b('" target="_blank" class="external-link">');i.b(i.v(i.f("short_hn_url",s,n,0)));i.b("</a></p></header>")});s.pop()}if(t.s(t.f("has_content",s,n,1),s,n,0,606,929,"{{ }}")){t.rs(s,n,function(s,n,i){i.b('<section class="grouped-tableview">');i.b(i.t(i.f("content",s,n,0)));if(i.s(i.f("has_poll",s,n,1),s,n,0,667,906,"{{ }}")){i.rs(s,n,function(s,n,i){i.b('<ul class="poll">');if(i.s(i.f("poll",s,n,1),s,n,0,693,892,"{{ }}")){i.rs(s,n,function(s,n,i){i.b('<li title="');i.b(i.v(i.f("percentage",s,n,0)));i.b('%"><span class="poll-details"><b>');i.b(i.v(i.f("item",s,n,0)));i.b('</b> <span class="points">');i.b(i.v(i.f("points",s,n,0)));i.b(" ");i.b(i.v(i.f("i_point",s,n,0)));i.b('</span></span><div class="poll-bar"><span style="width: ');i.b(i.v(i.f("width",s,n,0)));i.b('"></span></div></li>')});s.pop()}i.b("</ul>")});s.pop()}i.b("</section>")});s.pop()}t.b('</div><section class="comments">');if(t.s(t.f("loading",s,n,1),s,n,0,989,1030,"{{ }}")){t.rs(s,n,function(s,n,i){i.b('<div class="loader">Loading&hellip;</div>')});s.pop()}if(t.s(t.f("load_error",s,n,1),s,n,0,1057,1140,"{{ }}")){t.rs(s,n,function(s,n,i){i.b('<div class="load-error">Couldn\'t load comments.<br><button>Try again</button></div>')});s.pop()}if(!t.s(t.f("loading",s,n,1),s,n,1,0,0,"")&&!t.s(t.f("load_error",s,n,1),s,n,1,0,0,"")){if(t.s(t.f("has_comments",s,n,1),s,n,0,1199,1226,"{{ }}")){t.rs(s,n,function(s,n,i){i.b("<ul>");i.b(i.rp("<comments_list0",s,n,""));i.b("</ul>")});s.pop()}t.s(t.f("has_comments",s,n,1),s,n,1,0,0,"")||t.b('<p class="no-comments">No comments.</p>')}t.b("</section>");return t.fl()},partials:{"<comments_list0":{name:"comments_list",partials:{},subs:{}}},subs:{}}),post:new s({code:function(s,n,i){var t=this;t.b(i=i||"");t.b('<li id="story-');t.b(t.v(t.f("id",s,n,0)));t.b('" data-index="');t.b(t.v(t.f("i",s,n,0)));t.b('" class="post-');t.b(t.v(t.f("type",s,n,0)));t.b('"><a href="');t.b(t.v(t.f("url",s,n,0)));t.b('" class="');if(t.s(t.f("detail_disclosure",s,n,1),s,n,0,110,127,"{{ }}")){t.rs(s,n,function(s,n,i){i.b("detail-disclosure")});s.pop()}if(t.s(t.f("disclosure",s,n,1),s,n,0,164,174,"{{ }}")){t.rs(s,n,function(s,n,i){i.b("disclosure")});s.pop()}t.b(" ");if(t.s(t.f("selected",s,n,1),s,n,0,203,211,"{{ }}")){t.rs(s,n,function(s,n,i){i.b("selected")});s.pop()}t.b('"><div class="number">');t.b(t.v(t.f("i",s,n,0)));t.b('.</div><div class="story"><b>');t.b(t.v(t.f("title",s,n,0)));t.b("</b>");if(t.s(t.f("user",s,n,1),s,n,0,302,594,"{{ }}")){t.rs(s,n,function(s,n,i){i.b('<span class="metadata">');if(i.s(i.f("domain",s,n,1),s,n,0,336,381,"{{ }}")){i.rs(s,n,function(s,n,i){i.b('<span class="link-text">');i.b(i.v(i.f("domain",s,n,0)));i.b("</span><br>")});s.pop()}i.b('<span class="inline-block">');i.b(i.v(i.f("points",s,n,0)));i.b(" ");i.b(i.v(i.f("i_point",s,n,0)));i.b(" by ");i.b(i.v(i.f("user",s,n,0)));i.b('</span> <span class="inline-block">');i.b(i.v(i.f("time_ago",s,n,0)));if(i.s(i.f("comments_count",s,n,1),s,n,0,519,561,"{{ }}")){i.rs(s,n,function(s,n,i){i.b(" &middot; ");i.b(i.v(i.f("comments_count",s,n,0)));i.b(" ");i.b(i.v(i.f("i_comment",s,n,0)))});s.pop()}i.b("</span></span>")});s.pop()}if(!t.s(t.f("user",s,n,1),s,n,1,0,0,"")){t.b('<span class="metadata">');if(t.s(t.f("domain",s,n,1),s,n,0,646,691,"{{ }}")){t.rs(s,n,function(s,n,i){i.b('<span class="link-text">');i.b(i.v(i.f("domain",s,n,0)));i.b("</span><br>")});s.pop()}t.b('<span class="inline-block">');t.b(t.v(t.f("time_ago",s,n,0)));t.b("</span></span>")}t.b("</div></a>");if(t.s(t.f("detail_disclosure",s,n,1),s,n,0,796,870,"{{ }}")){t.rs(s,n,function(s,n,i){i.b('<a href="#/item/');i.b(i.v(i.f("id",s,n,0)));i.b('" class="detail-disclosure-button"><span></span></a>')});s.pop()}t.b("</li>");return t.fl()},partials:{},subs:{}}),"stories-load":new s({code:function(s,n,i){var t=this;t.b(i=i||"");if(t.s(t.f("loading",s,n,1),s,n,0,12,53,"{{ }}")){t.rs(s,n,function(s,n,i){i.b('<div class="loader">Loading&hellip;</div>')});s.pop()}if(t.s(t.f("load_error",s,n,1),s,n,0,80,132,"{{ }}")){t.rs(s,n,function(s,n,i){i.b('<div class="load-error">Couldn\'t load stories.</div>')});s.pop()}return t.fl()},partials:{},subs:{}})}})(Hogan.Template);