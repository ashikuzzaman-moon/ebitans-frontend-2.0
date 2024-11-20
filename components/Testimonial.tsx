import { DEFAULT } from '@/consts';
import { useGetTestimonialQuery } from '@/redux/home/homeApi';
import { all_testimonials } from '@/utils/dynamic-import/testimonial/testimonial';
import { useSelector } from 'react-redux';

const Testimonial = ({ design }: any) => {
    const TestimonialComponent =
        all_testimonials[design?.testimonials] || all_testimonials[DEFAULT];

    const {
        data: testimonialsData,
        isLoading: testimonialsLoading,
        isSuccess: testimonialsSuccess,
    } = useGetTestimonialQuery({});
    const testimonials = testimonialsData?.data || [];

    return (
        <>
            {TestimonialComponent ? (
                <TestimonialComponent
                    design={design}
                    testimonials={testimonials}
                />
            ) : (
                <p>Testimonial not found</p>
            )}
        </>
    );
};

export default Testimonial;

{
    /* {theme === 'default' && (
    <TestimonialThree testimonials={testimonials} />
)}
{theme === 'one' && <TestimonialOne testimonials={testimonials}/>}
{theme === 'two' && (
    <TestimonialTwo testimonials={testimonials} design={design} />
)}
{theme === 'three' && (
    <TestimonialThree testimonials={testimonials} />
)}
{theme === 'four' && (
    <TestimonialFour testimonials={testimonials} design={design} />
)}
{theme === 'five' && (
    <TestimonialFive testimonials={testimonials} />
)}
{theme === 'six' && (
    <TestimonialSeven testimonials={testimonials} />
)}
{theme === 'seven' && (
    <TestimonialFive testimonials={testimonials} />
)}
{theme === 'eight' && (
    <TestimonialFive testimonials={testimonials} />
)}
{theme === 'nine' && (
    <TestimonialTwelve
        testimonials={testimonials}
        design={design}
    />
)}
{theme === 'ten' && (
    <TestimonialSeven testimonials={testimonials} />
)}
{theme === 'twelve' && (
    <TestimonialTwo testimonials={testimonials} design={design} />
)}
{theme === 'fifteen' && (
    <TestimonialTwelve
        testimonials={testimonials}
        design={design}
    />
)}
{theme === 'twentyseven' && (
    <TestimonialTwentySeven
        testimonials={testimonials}
        design={design}
    />
)}
{theme === 'thirtyone' && (
    <TestimonialTwentySeven
        testimonials={testimonials}
        design={design}
    />
)}
{theme === 'thirtysix' && (
    <TestimonialTwentySeven
        testimonials={testimonials}
        design={design}
    />
)}
{theme === 'thirtyfive' && (
    <TestimonialThirtyFive testimonials={testimonials} />
)} */
}
