import mongoose from 'mongoose'
import slug from 'slug'

const category = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    desc:{
        type: String,
        required: true,
    },
    slug:{
        type: String,
    },
    shortName:{
        type: String,
        unique: true
    },
    image: String,
    color: String,
    blogs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'blog',
    }],
},{timestamp: true})

category.pre('save', function(){
    if(this.name){
        this.slug = slug(this.name, {lower: true,replacement: '-'})
    }
})

const Category =mongoose.models.category ||  mongoose.model('category', category)

export default Category