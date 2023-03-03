import React, { Component } from 'react';
import CardsComp from '../../Components/Component/Formation/CardsComp/CardsComp';
import FilterComp from '../../Components/Component/Formation/FilterComp/FilterComp';
import './FormationView.css';

export default class FormationView extends Component {

    constructor(props) {
        super(props); this.state = {
            trainings: [],
            categories: [],
            trainingLoading: true,
            categoryLoading: true,
            startName: "",
            categoryId: "",
            minPrice: 0,
            maxPrice: 99999999,
            minDuration: 0,
            maxDuration: 9999999,
            minDate: '1900-01-01',
            maxDate: '2100-12-31',
            isCertified : true
        };
    }

    componentDidMount() { this.displayAllTrainingData(); this.getAllCategoriesData(); }

    //refreshTrainigsWithAllFilter = () => {
    //    this.displayAllTrainingData()

    //    if (filterName) this.trainingDataByCategory(categoryid);
    //    if (filterCategory) this.trainingDataByName(categoryid);
    //            //if (filterPrice)
    //            //    if (filterDuration)
    //            //        if (filterIsCertified)
    //            //            if (filterDate)



    //}

    //refreshTrainigsWithOneFilter = (newFilteredTrainingsData) => {
    //    const newDatas = this.state.trainings.filter(training => newFilteredTrainingsData.some(filteredTraining => filteredTraining.id === training.id));
    //    this.setState({ trainings: newDatas });
    //}


    handleCategoryChange = (id) => {
        let selectedCategory = this.state.categories.find(x => x.id == id)
        //selectedCategory != null ? this.setState({ categoryId: id }) : this.setState({ categoryId: null });
        if (selectedCategory != null && selectedCategory != 0)
        {
            this.setState({ categoryId: id });
        }
        else
        {
            this.setState({ categoryId: "" });
        }
        this.trainingDataByManyLocalStatesFilter();
    }
    handleNameChange = (startingName) => {
        this.setState({ startName: startingName });
        this.trainingDataByManyLocalStatesFilter();
    }
    handleMinPriceChange = (min) => {
        this.setState({ minPrice: min });
        this.trainingDataByManyLocalStatesFilter();
    }
    handleMaxPriceChange = (max) => {
        this.setState({ maxPrice: max });
        this.trainingDataByManyLocalStatesFilter();
    }
    handleMinDurationDayChange = (minDays) => {
        this.setState({ minDuration: minDays });
        this.trainingDataByManyLocalStatesFilter();
    }
    handleMaxDurationDayChange = (maxDays) => {
        this.setState({ maxDuration: maxDays });
        this.trainingDataByManyLocalStatesFilter();
    }
    handleIsCertifiedChange = (isCerfifiedBool) => {
        //console.log("le input bool est : " + isCerfifiedBool);
        //this.setState({ isCertified: !isCerfifiedBool });
        //console.log("le state bool est : " + this.state.isCertified);
        this.setState({ isCertified: !this.state.isCertified });
        this.trainingDataByManyLocalStatesFilter();
    }
    handleMinDateChange = (minDate) => {
        this.setState({ minDate: minDate });
        this.trainingDataByManyLocalStatesFilter();
    }
    handleMaxDateChange = (maxDate) => {
        this.setState({ maxDate: maxDate });
        this.trainingDataByManyLocalStatesFilter();
    }

    render() {
        return (
            <div className='row m-0 p-0'>
                <div className='cardsDisplay col col-9 m-0 p-0'>
                    {!this.state.trainingLoading ? (
                        <CardsComp trainings={this.state.trainings} />
                    ) : (
                        <div>Chargement</div>
                    )}
                </div>
                <div className=' col col-3 m-0 p-0'>
                    {!this.state.categoryLoading ? (
                        <FilterComp
                            categories={this.state.categories} // to display categories as select options
                            handleNameChange={this.handleNameChange}
                            onCategoryChange={this.handleCategoryChange}
                            handleMinPriceChange={this.handleMinPriceChange}
                            handleMaxPriceChange={this.handleMaxPriceChange}
                            handleMinDurationDayChange={this.handleMinDurationDayChange}
                            handleMaxDurationDayChange={this.handleMaxDurationDayChange}
                            handleIsCertifiedChange={this.handleIsCertifiedChange}
                            handleMinDateChange={this.handleMinDateChange}
                            handleMaxDateChange={this.handleMaxDateChange}
                        />
                    ) : (
                        <div>Chargement</div>
                    )}
                </div>
            </div>

        );
    }

    async displayAllTrainingData() {
        const response = await fetch('https://localhost:7234/training');
        const data = await response.json();
        this.setState({ trainings: data, trainingLoading: false });
    }
    async getAllCategoriesData() {
        const response = await fetch('https://localhost:7234/trainingCategory');
        const data = await response.json();
        this.setState({ categories: data, categoryLoading: false });
    }

    async trainingDataByManyLocalStatesFilter() {
        let filterProps = this.state.minPrice + "&" + this.state.maxPrice + "&" + this.state.minDuration + "&" + this.state.maxDuration + "&" + this.state.minDate + "&" + this.state.maxDate + "&" + this.state.isCertified;
        filterProps +=
            this.state.startName.length > 0 && this.state.categoryId.length > 0 ? `?startName=${this.state.startName}&categoryId=${this.state.categoryId}`
            : this.state.startName.length > 0 ? `?startName=${this.state.startName}`
                : this.state.categoryId.length > 0 ? `?categoryId=${this.state.categoryId}`
                        : "";
        console.log(filterProps);
        const response = await fetch(`https://localhost:7234/training/filter/${filterProps}`); 
        const data = await response.json();
        this.setState({ trainings: data, trainingLoading: false });
    }

    //async getTrainingDataByStartName(trainingStartName) {
    //    const response = await fetch(`https://localhost:7234/training/${trainingStartName}`);
    //    const data = await response.json();
    //    this.refreshTrainigsWithOneFilter(data);
    //}

    //async trainingDataByCategory(categoryId) {
    //    const response = await fetch(`https://localhost:7234/training/category/${categoryId}`);
    //    const data = await response.json();
    //    this.refreshTrainigsWithOneFilter(data);
    //}

    //async trainingDataByPrice(min, max) {
    //    let pricesValues = min + "_" + max;
    //    const response = await fetch(`https://localhost:7234/training/price/${pricesValues}`);
    //    const data = await response.json();
    //    this.setState({ trainings: data, trainingLoading: false });
    //}

    
}
