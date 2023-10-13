import React, { Component } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { SearchBar } from './SearchBar/SearchBar';
import { MainContainer } from './MainContainer.styled';
import { ImageGallery } from './Gallery/ImageGallery';
import { LoadMoreBtn } from './LoadMoreBtn/LoadMoreBtn';
import { fetchImages } from './Api/Api';
import { Loader } from './Loader/Loader';

export class App extends Component {

  state = {
    query: '',
    page: 1,
    images: [],
    totalHits: 0,
    loading: false,
    error: false,    
  } 
  
 
  handleSubmit = evt => {   
    evt.preventDefault();
    
      this.setState({ 
        query: evt.target.elements.query.value.trim(),
        page:1,
        images: [], 
      })   
  };

   
  async componentDidUpdate(prevProps, prevState) { 

    if (prevState.query !== this.state.query || prevState.page !== this.state.page) {

      try {
        this.setState({
          loading: true,
        });

        const { query, page } = this.state;
        const results = await fetchImages(query, page);

        if (results.totalHits === 0) {
          toast.error(`Sorry, there are no images matching your search query. Please try again.`);
          this.setState({ loading: false });
          return;
        };

        if (page === 1) {
          this.setState({
            images: results.hits,
            totalHits: results.totalHits,
          }) 
          toast.success(`Hooray! We found ${results.totalHits} for you.`);         
        } else {
          this.setState({
            images: [...prevState.images, ...results.hits],
            totalHits: results.totalHits,
          });          
        } 

      } catch (error) {
        toast.error('Error while fetching images. Please try again.');
      } finally {
        this.setState({ loading: false });
      }
    }
  };

  canLoadMore = () => {
    const { images, page, totalHits } = this.state;
    return images.length > 0 && page < Math.ceil(totalHits / 12);
  }; 

  handleLoadMore = () => {
    this.setState(
      (prevState) => ({
        page: prevState.page + 1,
      }), () => {       
        if (!this.canLoadMore()) {
          toast('You`ve reached the end of search results.', { icon: '🎨', });
        }
      }
    );
  };

   render() {
    const {images, loading} = this.state;
    const canLoadMore = this.canLoadMore();
      return (
        <MainContainer>
          <SearchBar onSubmit= {this.handleSubmit}/>
          {this.state.images.length > 0 && 
          <ImageGallery images={images}/>}    
          {loading && <Loader /> }      
          {canLoadMore && <LoadMoreBtn onLoadMore={this.handleLoadMore}/>}
          <Toaster position="top-right" />
        </MainContainer>
      )
  };
};