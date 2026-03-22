from pathlib import Path
import textwrap


def decode_template(raw_text: str) -> str:
    return textwrap.dedent(raw_text).strip().encode("utf-8").decode("unicode_escape") + "\n"


files = {
    r"E:\test\mobile-uniapp\pages\my-posts\index.vue": r"""
<template>
  <view class="page-shell">
    <view class="page-header">
      <view class="page-title">\u6211\u7684\u53d1\u5e03</view>
      <view class="page-desc">\u7ba1\u7406\u81ea\u5df1\u5df2\u7ecf\u53d1\u5e03\u7684\u5185\u5bb9\uff0c\u67e5\u770b\u4e92\u52a8\u6570\u636e\u4e0e\u5bfc\u8d2d\u6548\u679c\u3002</view>
    </view>

    <view class="panel-card">
      <view class="text-copy" style="margin-top:0;">{{ statusText }}</view>
    </view>

    <view class="look-card" v-for="item in posts" :key="item.id" @click="goDetail(item.id)">
      <view class="look-cover">
        <view class="cover-tag">{{ item.coverTag }}</view>
        <view class="cover-title">{{ item.title }}</view>
        <view class="cover-copy">{{ item.subtitle }}</view>
      </view>
      <view class="text-copy">{{ item.desc }}</view>
      <view class="meta-line">
        <view class="stats-line">
          <view class="stat-text">\u8d5e {{ item.likes }}</view>
          <view class="stat-text">\u8bc4 {{ item.comments }}</view>
          <view class="stat-text">\u85cf {{ item.saves }}</view>
        </view>
        <view class="side-pill">\u5df2\u53d1\u5e03</view>
      </view>
    </view>
  </view>
</template>

<script>
var mock = require('../../common/mock.js')
var api = require('../../common/api.js')

export default {
  data: function() {
    return {
      posts: [],
      statusText: '\u6b63\u5728\u52a0\u8f7d\u6211\u7684\u53d1\u5e03...'
    }
  },
  onShow: function() {
    this.loadMine()
  },
  methods: {
    loadMine: function() {
      var self = this
      api.listMyPosts()
        .then(function(list) {
          self.posts = list || []
          self.statusText = '\u6211\u7684\u53d1\u5e03\u5df2\u8fde\u63a5\u540e\u7aef\uff1a' + (api.getActiveBaseUrl() || 'Spring Boot')
        })
        .catch(function() {
          self.posts = mock.clone(mock.outfits).slice(0, 4)
          self.statusText = '\u540e\u7aef\u6682\u4e0d\u53ef\u7528\uff0c\u5f53\u524d\u663e\u793a\u672c\u5730\u6f14\u793a\u6570\u636e\u3002'
        })
    },
    goDetail: function(id) {
      uni.navigateTo({ url: '/pages/detail/index?id=' + id })
    }
  }
}
</script>

<style>
</style>
""",
    r"E:\test\mobile-uniapp\pages\results\index.vue": r"""
<template>
  <view class="page-shell">
    <view class="page-header">
      <view class="page-title">{{ keyword }} \u7684\u641c\u7d22\u7ed3\u679c</view>
      <view class="page-desc">\u5df2\u4e3a\u4f60\u5339\u914d\u6821\u56ed\u573a\u666f\u3001\u98ce\u683c\u548c\u9884\u7b97\u76f8\u8fd1\u7684\u5185\u5bb9\uff0c\u53ef\u7ee7\u7eed\u4e0b\u62c9\u52a0\u8f7d\u66f4\u591a\u3002</view>
    </view>

    <view class="panel-card">
      <view class="text-copy" style="margin-top:0;">{{ statusText }}</view>
    </view>

    <view class="chip-row">
      <view class="chip chip-active">\u63a8\u8350\u6392\u5e8f</view>
      <view class="chip chip-outline">\u6700\u65b0\u53d1\u5e03</view>
      <view class="chip chip-outline">\u6536\u85cf\u6700\u591a</view>
    </view>

    <view class="look-card" v-for="item in results" :key="item.id" @click="goDetail(item.id)">
      <view class="look-cover">
        <view class="cover-tag">{{ item.coverTag }}</view>
        <view class="cover-title">{{ item.title }}</view>
        <view class="cover-copy">{{ item.subtitle }}</view>
      </view>
      <view class="text-copy">{{ item.desc }}</view>
      <view class="meta-line">
        <view class="meta-left">
          <view :class="['avatar', item.avatarClass]">{{ item.avatar }}</view>
          <view>
            <view class="meta-name">{{ item.user }}</view>
            <view class="meta-school">{{ item.school }}</view>
          </view>
        </view>
        <view class="stats-line">
          <view class="stat-text">\u8d5e {{ item.likes }}</view>
          <view class="stat-text">\u8bc4 {{ item.comments }}</view>
          <view class="stat-text">\u85cf {{ item.saves }}</view>
        </view>
      </view>
    </view>

    <button class="btn-secondary" style="margin-top:16rpx;" @click="loadMore">\u52a0\u8f7d\u66f4\u591a</button>
  </view>
</template>

<script>
var mock = require('../../common/mock.js')
var api = require('../../common/api.js')

export default {
  data: function() {
    return {
      keyword: '\u56fe\u4e66\u9986',
      results: [],
      statusText: '\u6b63\u5728\u4ece\u540e\u7aef\u83b7\u53d6\u641c\u7d22\u7ed3\u679c...'
    }
  },
  onLoad: function(options) {
    if (options.keyword) {
      this.keyword = decodeURIComponent(options.keyword)
    }
    this.loadResults()
  },
  methods: {
    loadResults: function() {
      var self = this
      api.searchPosts(self.keyword)
        .then(function(list) {
          self.results = list || []
          self.statusText = '\u641c\u7d22\u7ed3\u679c\u5df2\u8fde\u63a5\u540e\u7aef\uff1a' + (api.getActiveBaseUrl() || 'Spring Boot')
        })
        .catch(function() {
          self.results = mock.clone(mock.outfits)
          self.statusText = '\u540e\u7aef\u641c\u7d22\u672a\u83b7\u53d6\u6210\u529f\uff0c\u5f53\u524d\u663e\u793a\u672c\u5730\u6f14\u793a\u6570\u636e\u3002'
        })
    },
    goDetail: function(id) {
      uni.navigateTo({ url: '/pages/detail/index?id=' + id })
    },
    loadMore: function() {
      uni.showToast({ title: '\u5f53\u524d\u4e3a\u6f14\u793a\u63a5\u53e3\uff0c\u5df2\u5c55\u793a\u9996\u6279\u7ed3\u679c', icon: 'none' })
    }
  }
}
</script>

<style>
</style>
""",
    r"E:\test\mobile-uniapp\pages\messages\index.vue": r"""
<template>
  <view class="page-shell">
    <view class="page-header">
      <view class="page-title">\u6d88\u606f\u901a\u77e5</view>
      <view class="page-desc">\u67e5\u770b\u4e92\u52a8\u3001\u7cfb\u7edf\u3001\u6536\u76ca\u4e0e\u5546\u4e1a\u5408\u4f5c\u76f8\u5173\u6d88\u606f\uff0c\u5f62\u6210\u5185\u5bb9\u53d1\u5e03\u95ed\u73af\u3002</view>
    </view>

    <view class="panel-card">
      <view class="text-copy" style="margin-top:0;">{{ statusText }}</view>
    </view>

    <view class="chip-row">
      <view v-for="item in tabs" :key="item" :class="['chip', currentTab === item ? 'chip-active' : 'chip-outline']" @click="currentTab = item">{{ item }}</view>
    </view>

    <view class="list-card" v-for="item in filtered" :key="item.id">
      <view class="cover-tag">{{ item.type }}</view>
      <view class="list-title" style="margin-top:16rpx;">{{ item.title }}</view>
      <view class="list-copy">{{ item.desc }}</view>
      <view class="list-meta">{{ item.time }}</view>
    </view>
  </view>
</template>

<script>
var mock = require('../../common/mock.js')
var api = require('../../common/api.js')

export default {
  data: function() {
    return {
      tabs: ['\u5168\u90e8', '\u4e92\u52a8\u6d88\u606f', '\u5546\u4e1a\u5408\u4f5c', '\u7cfb\u7edf\u901a\u77e5', '\u8bc4\u8bba\u63d0\u9192', '\u6536\u76ca\u901a\u77e5'],
      currentTab: '\u5168\u90e8',
      messages: [],
      statusText: '\u6b63\u5728\u4ece\u540e\u7aef\u540c\u6b65\u6d88\u606f\u901a\u77e5...'
    }
  },
  onShow: function() {
    this.loadMessages()
  },
  computed: {
    filtered: function() {
      if (this.currentTab === '\u5168\u90e8') {
        return this.messages
      }
      var result = []
      for (var i = 0; i < this.messages.length; i += 1) {
        if (this.messages[i].type === this.currentTab) {
          result.push(this.messages[i])
        }
      }
      return result
    }
  },
  methods: {
    loadMessages: function() {
      var self = this
      api.listMessages()
        .then(function(list) {
          self.messages = list || []
          self.statusText = '\u6d88\u606f\u5217\u8868\u5df2\u8fde\u63a5\u540e\u7aef\uff1a' + (api.getActiveBaseUrl() || 'Spring Boot')
        })
        .catch(function() {
          self.messages = mock.clone(mock.messages)
          self.statusText = '\u540e\u7aef\u6d88\u606f\u672a\u83b7\u53d6\u6210\u529f\uff0c\u5f53\u524d\u663e\u793a\u672c\u5730\u6f14\u793a\u6570\u636e\u3002'
        })
    }
  }
}
</script>

<style>
</style>
""",
    r"E:\test\mobile-uniapp\pages\search\index.vue": r"""
<template>
  <view class="page-shell">
    <view class="page-header">
      <view class="page-title">\u641c\u7d22\u4e0e\u7b5b\u9009</view>
      <view class="page-desc">\u901a\u8fc7\u5173\u952e\u8bcd\u3001\u6821\u56ed\u573a\u666f\u3001\u98ce\u683c\u548c\u9884\u7b97\u5feb\u901f\u5b9a\u4f4d\u60f3\u770b\u7684\u7a7f\u642d\u5185\u5bb9\u3002</view>
    </view>
    <view class="search-bar">
      <view class="search-icon">\u641c</view>
      <input style="flex:1; font-size:26rpx;" v-model="keyword" placeholder="\u641c\u7d22\u7a7f\u642d\u573a\u666f\u3001\u5355\u54c1\u6216\u98ce\u683c" />
    </view>
    <button class="btn-primary" style="margin-top:18rpx;" @click="submitSearch">\u7acb\u5373\u641c\u7d22</button>

    <view class="section-title">\u5386\u53f2\u641c\u7d22</view>
    <view class="chip-row">
      <view class="chip chip-outline" v-for="item in history" :key="item" @click="useKeyword(item)">{{ item }}</view>
    </view>

    <view class="section-title">\u70ed\u95e8\u641c\u7d22</view>
    <view class="chip-row">
      <view class="chip chip-active" v-for="item in hot" :key="item" @click="useKeyword(item)">{{ item }}</view>
    </view>

    <view class="section-title">\u573a\u666f\u7b5b\u9009</view>
    <view class="chip-row">
      <view v-for="item in sceneTags" :key="item" :class="['chip', filters.scene === item ? 'chip-active' : 'chip-outline']" @click="setFilter('scene', item)">{{ item }}</view>
    </view>

    <view class="section-title">\u98ce\u683c\u7b5b\u9009</view>
    <view class="chip-row">
      <view v-for="item in styleTags" :key="item" :class="['chip', filters.style === item ? 'chip-active' : 'chip-outline']" @click="setFilter('style', item)">{{ item }}</view>
    </view>

    <view class="section-title">\u9884\u7b97\u7b5b\u9009</view>
    <view class="chip-row">
      <view v-for="item in budgetTags" :key="item" :class="['chip', filters.budget === item ? 'chip-active' : 'chip-outline']" @click="setFilter('budget', item)">{{ item }}</view>
    </view>

    <view class="panel-card">
      <view class="text-main">\u5f53\u524d\u7b5b\u9009\u6761\u4ef6</view>
      <view class="text-copy">\u5173\u952e\u8bcd\uff1a{{ keyword }} ｜ \u573a\u666f\uff1a{{ filters.scene || '\u4e0d\u9650' }} ｜ \u98ce\u683c\uff1a{{ filters.style || '\u4e0d\u9650' }} ｜ \u9884\u7b97\uff1a{{ filters.budget || '\u4e0d\u9650' }}</view>
    </view>
  </view>
</template>

<script>
var mock = require('../../common/mock.js')

export default {
  data: function() {
    return {
      keyword: '\u56fe\u4e66\u9986',
      history: mock.clone(mock.searchHistory),
      hot: mock.clone(mock.hotSearches),
      sceneTags: mock.sceneTags,
      styleTags: mock.styleTags,
      budgetTags: mock.budgetTags,
      filters: {
        scene: '\u56fe\u4e66\u9986',
        style: '\u5b66\u9662\u98ce',
        budget: '100-150'
      }
    }
  },
  methods: {
    useKeyword: function(word) {
      this.keyword = word
    },
    setFilter: function(type, value) {
      if (this.filters[type] === value) {
        this.filters[type] = ''
      } else {
        this.filters[type] = value
      }
    },
    submitSearch: function() {
      uni.navigateTo({ url: '/pages/results/index?keyword=' + encodeURIComponent(this.keyword) })
    }
  }
}
</script>

<style>
</style>
""",
}


for path, raw_text in files.items():
    Path(path).write_text(decode_template(raw_text), encoding="utf-8")
