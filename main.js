const app = new Vue({
    el: '#app',
    
    data () {
      return {
        courses: [],
        time: '',
        title: ''
      }
    },
    
    computed: {
        totalTime () {
            if (!this.courses.length) { return 0 }
            return this.courses.reduce((a, b) => a + parseInt(b.time), 0)
        }

    },
    
    methods: {
        addCourse () {
            if (!this.title || !this.time) {return}
            this.courses.push({title: this.title, time: this.time})
            
            this.title = ''
            this.time = ''
        }
    }
  });