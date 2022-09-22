const app = new Vue({
    el: '#app',
    
    data () {
      return {
        courses: [],
        time: '',
        title: '',
        alertMessage: false
      }
    },
    
    computed: {
        totalTime () {
            if (!this.courses.length) { return 0 }
            return this.courses.reduce((a, b) => a + parseInt(b.time), 0)
        }

    },
    mounted() {
      if (localStorage.courses) {
        this.courses = JSON.parse(localStorage.getItem('courses'));
      }
    },
    
    methods: {
        addCourse () {
            this.alertMessage = !this.alertMessage;

            if (!this.title || !this.time) {return}
            
            this.courses.push({title: this.title, time: this.time})
            const parsed = JSON.stringify(this.courses);
            localStorage.setItem('courses', parsed);

            this.title = ''
            this.time = ''        
        },
        removeCourse (c) {
            this.courses = this.courses.filter((t) => t !== c)
        },
        resetList() {
          localStorage.clear();
          this.courses = [];
        }
    }

  
  });

