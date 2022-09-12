import "./acordeon.scss";

const Acordeon = () => {
  return (
    <div className="center">
       <div class="accordion">
     <input type="radio" name="select" class="accordion-select" checked />
    <div class="accordion-title"><span>Title</span></div>
    <div class="accordion-content">Content</div> 
         <input type="radio" name="select" class="accordion-select" />
    <div class="accordion-title"><span>Title</span></div>
    <div class="accordion-content">Content</div> 
         <input type="radio" name="select" class="accordion-select" />
    <div class="accordion-title"><span>Title</span></div>
    <div class="accordion-content">Content</div> 
         <input type="radio" name="select" class="accordion-select" />
         </div>
    </div>
  );
};

export default Acordeon;
