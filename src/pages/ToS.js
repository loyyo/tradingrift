import React from 'react';
// import AboutUsContent from '../components/AboutUsContent';
// import Herov2 from '../components/Herov2';
// import Banner from '../components/Banner';
// import { Link } from 'react-router-dom';

/* cSpell:disable */
const ToS = () => {
	return (
		<>
			{/* <Herov2>
				<Banner title='Lorem ipsum' subtitle='lorem ipsum'>
					<Link to='/faq' className='btn-primary'>
						Dowiedz się więcej
					</Link>
					<Link to='/sprzedaj' className='btn-primary'>
						Sprzedaj teraz
					</Link>
				</Banner>
			</Herov2> */}
			<div className='tos'>
				<section id='sp-custom-position-3'>
					<div className='container'>
						<div className='row'>
							<div id='sp-custom-position-3' class='col-sm-12 col-md-12'>
								<div className='sp-column '>
									<div className='sp-module '>
										<div className='sp-module-content'>
											<div className='custom'>
												<p>Regulamin serwisu ???.pl</p>
												<div className='tos-header'>
													<p>I. PODSTAWOWE DEFINICJE</p>
												</div>
												<p>
													Ut condimentum facilisis ipsum id bibendum. Quisque eget vestibulum nisi,
													malesuada aliquet lorem. Pellentesque sed venenatis ligula, eu facilisis
													magna. Integer maximus purus in fringilla sodales. Morbi vel libero est.
													Aliquam consequat dolor ut pretium efficitur. Integer luctus sem a
													hendrerit luctus. Interdum et malesuada fames ac ante ipsum primis in
													faucibus. Nam fringilla vitae eros ut dignissim. Cras purus lorem,
													dignissim non tempus porta, tristique vitae mi. Proin mollis scelerisque
													dolor ut sagittis. Donec laoreet faucibus elit in tempus. Proin
													sollicitudin semper tellus, sit amet vehicula metus venenatis ac.
													Pellentesque malesuada blandit nisi vitae bibendum. Aliquam aliquam, nulla
													sit amet sodales tempor, turpis enim condimentum eros, quis aliquet magna
													nunc molestie enim. Cras a lobortis dolor, ac faucibus ligula. Maecenas ut
													molestie augue. Donec vehicula orci nec libero blandit gravida. Fusce vel
													eros tincidunt, blandit lacus vitae, tristique dui. Pellentesque facilisis
													justo vitae porta lobortis. In eleifend ex ac ultricies bibendum. Duis in
													leo porttitor, laoreet sapien quis, imperdiet libero. Donec vitae
													tristique nisl. Praesent malesuada, mauris ut tincidunt aliquam, eros
													lectus cursus lectus, nec dictum tellus risus ut turpis. Nam cursus tellus
													lectus, placerat posuere erat dictum in. Donec id nisl ut ligula lobortis
													tempor. Cras ut lobortis massa. In vel ex quis lorem rhoncus convallis.
													Sed accumsan lacus ac euismod volutpat. Cras luctus pharetra lobortis.
												</p>
												<div className='tos-header'>
													<p>II. POSTANOWIENIA OGÓLNE</p>
												</div>
												<p>
													Ut condimentum facilisis ipsum id bibendum. Quisque eget vestibulum nisi,
													malesuada aliquet lorem. Pellentesque sed venenatis ligula, eu facilisis
													magna. Integer maximus purus in fringilla sodales. Morbi vel libero est.
													Aliquam consequat dolor ut pretium efficitur. Integer luctus sem a
													hendrerit luctus. Interdum et malesuada fames ac ante ipsum primis in
													faucibus. Nam fringilla vitae eros ut dignissim. Cras purus lorem,
													dignissim non tempus porta, tristique vitae mi. Proin mollis scelerisque
													dolor ut sagittis. Donec laoreet faucibus elit in tempus. Proin
													sollicitudin semper tellus, sit amet vehicula metus venenatis ac.
													Pellentesque malesuada blandit nisi vitae bibendum. Aliquam aliquam, nulla
													sit amet sodales tempor, turpis enim condimentum eros, quis aliquet magna
													nunc molestie enim. Cras a lobortis dolor, ac faucibus ligula. Maecenas ut
													molestie augue. Donec vehicula orci nec libero blandit gravida. Fusce vel
													eros tincidunt, blandit lacus vitae, tristique dui. Pellentesque facilisis
													justo vitae porta lobortis. In eleifend ex ac ultricies bibendum. Duis in
													leo porttitor, laoreet sapien quis, imperdiet libero. Donec vitae
													tristique nisl. Praesent malesuada, mauris ut tincidunt aliquam, eros
													lectus cursus lectus, nec dictum tellus risus ut turpis. Nam cursus tellus
													lectus, placerat posuere erat dictum in. Donec id nisl ut ligula lobortis
													tempor. Cras ut lobortis massa. In vel ex quis lorem rhoncus convallis.
													Sed accumsan lacus ac euismod volutpat. Cras luctus pharetra lobortis.
												</p>
												<div className='tos-header'>
													<p>III. ZASADY KORZYSTANIA Z SERWISU</p>
												</div>
												<p>
													Ut condimentum facilisis ipsum id bibendum. Quisque eget vestibulum nisi,
													malesuada aliquet lorem. Pellentesque sed venenatis ligula, eu facilisis
													magna. Integer maximus purus in fringilla sodales. Morbi vel libero est.
													Aliquam consequat dolor ut pretium efficitur. Integer luctus sem a
													hendrerit luctus. Interdum et malesuada fames ac ante ipsum primis in
													faucibus. Nam fringilla vitae eros ut dignissim. Cras purus lorem,
													dignissim non tempus porta, tristique vitae mi. Proin mollis scelerisque
													dolor ut sagittis. Donec laoreet faucibus elit in tempus. Proin
													sollicitudin semper tellus, sit amet vehicula metus venenatis ac.
													Pellentesque malesuada blandit nisi vitae bibendum. Aliquam aliquam, nulla
													sit amet sodales tempor, turpis enim condimentum eros, quis aliquet magna
													nunc molestie enim. Cras a lobortis dolor, ac faucibus ligula. Maecenas ut
													molestie augue. Donec vehicula orci nec libero blandit gravida. Fusce vel
													eros tincidunt, blandit lacus vitae, tristique dui. Pellentesque facilisis
													justo vitae porta lobortis. In eleifend ex ac ultricies bibendum. Duis in
													leo porttitor, laoreet sapien quis, imperdiet libero. Donec vitae
													tristique nisl. Praesent malesuada, mauris ut tincidunt aliquam, eros
													lectus cursus lectus, nec dictum tellus risus ut turpis. Nam cursus tellus
													lectus, placerat posuere erat dictum in. Donec id nisl ut ligula lobortis
													tempor. Cras ut lobortis massa. In vel ex quis lorem rhoncus convallis.
													Sed accumsan lacus ac euismod volutpat. Cras luctus pharetra lobortis.
												</p>
												<div className='tos-header'>
													<p>IV. NABYWANIE KONT</p>
												</div>
												<p>
													Ut condimentum facilisis ipsum id bibendum. Quisque eget vestibulum nisi,
													malesuada aliquet lorem. Pellentesque sed venenatis ligula, eu facilisis
													magna. Integer maximus purus in fringilla sodales. Morbi vel libero est.
													Aliquam consequat dolor ut pretium efficitur. Integer luctus sem a
													hendrerit luctus. Interdum et malesuada fames ac ante ipsum primis in
													faucibus. Nam fringilla vitae eros ut dignissim. Cras purus lorem,
													dignissim non tempus porta, tristique vitae mi. Proin mollis scelerisque
													dolor ut sagittis. Donec laoreet faucibus elit in tempus. Proin
													sollicitudin semper tellus, sit amet vehicula metus venenatis ac.
													Pellentesque malesuada blandit nisi vitae bibendum. Aliquam aliquam, nulla
													sit amet sodales tempor, turpis enim condimentum eros, quis aliquet magna
													nunc molestie enim. Cras a lobortis dolor, ac faucibus ligula. Maecenas ut
													molestie augue. Donec vehicula orci nec libero blandit gravida. Fusce vel
													eros tincidunt, blandit lacus vitae, tristique dui. Pellentesque facilisis
													justo vitae porta lobortis. In eleifend ex ac ultricies bibendum. Duis in
													leo porttitor, laoreet sapien quis, imperdiet libero. Donec vitae
													tristique nisl. Praesent malesuada, mauris ut tincidunt aliquam, eros
													lectus cursus lectus, nec dictum tellus risus ut turpis. Nam cursus tellus
													lectus, placerat posuere erat dictum in. Donec id nisl ut ligula lobortis
													tempor. Cras ut lobortis massa. In vel ex quis lorem rhoncus convallis.
													Sed accumsan lacus ac euismod volutpat. Cras luctus pharetra lobortis.
												</p>
												<div className='tos-header'>
													<p>V. OŚWIADCZENIA ADMINISTRATORA</p>
												</div>
												<p>
													Ut condimentum facilisis ipsum id bibendum. Quisque eget vestibulum nisi,
													malesuada aliquet lorem. Pellentesque sed venenatis ligula, eu facilisis
													magna. Integer maximus purus in fringilla sodales. Morbi vel libero est.
													Aliquam consequat dolor ut pretium efficitur. Integer luctus sem a
													hendrerit luctus. Interdum et malesuada fames ac ante ipsum primis in
													faucibus. Nam fringilla vitae eros ut dignissim. Cras purus lorem,
													dignissim non tempus porta, tristique vitae mi. Proin mollis scelerisque
													dolor ut sagittis. Donec laoreet faucibus elit in tempus. Proin
													sollicitudin semper tellus, sit amet vehicula metus venenatis ac.
													Pellentesque malesuada blandit nisi vitae bibendum. Aliquam aliquam, nulla
													sit amet sodales tempor, turpis enim condimentum eros, quis aliquet magna
													nunc molestie enim. Cras a lobortis dolor, ac faucibus ligula. Maecenas ut
													molestie augue. Donec vehicula orci nec libero blandit gravida. Fusce vel
													eros tincidunt, blandit lacus vitae, tristique dui. Pellentesque facilisis
													justo vitae porta lobortis. In eleifend ex ac ultricies bibendum. Duis in
													leo porttitor, laoreet sapien quis, imperdiet libero. Donec vitae
													tristique nisl. Praesent malesuada, mauris ut tincidunt aliquam, eros
													lectus cursus lectus, nec dictum tellus risus ut turpis. Nam cursus tellus
													lectus, placerat posuere erat dictum in. Donec id nisl ut ligula lobortis
													tempor. Cras ut lobortis massa. In vel ex quis lorem rhoncus convallis.
													Sed accumsan lacus ac euismod volutpat. Cras luctus pharetra lobortis.
												</p>
												<div className='tos-header'>
													<p>VI. OŚWIADCZENIA UŻYTKOWNIKA</p>
												</div>
												<p>
													Ut condimentum facilisis ipsum id bibendum. Quisque eget vestibulum nisi,
													malesuada aliquet lorem. Pellentesque sed venenatis ligula, eu facilisis
													magna. Integer maximus purus in fringilla sodales. Morbi vel libero est.
													Aliquam consequat dolor ut pretium efficitur. Integer luctus sem a
													hendrerit luctus. Interdum et malesuada fames ac ante ipsum primis in
													faucibus. Nam fringilla vitae eros ut dignissim. Cras purus lorem,
													dignissim non tempus porta, tristique vitae mi. Proin mollis scelerisque
													dolor ut sagittis. Donec laoreet faucibus elit in tempus. Proin
													sollicitudin semper tellus, sit amet vehicula metus venenatis ac.
													Pellentesque malesuada blandit nisi vitae bibendum. Aliquam aliquam, nulla
													sit amet sodales tempor, turpis enim condimentum eros, quis aliquet magna
													nunc molestie enim. Cras a lobortis dolor, ac faucibus ligula. Maecenas ut
													molestie augue. Donec vehicula orci nec libero blandit gravida. Fusce vel
													eros tincidunt, blandit lacus vitae, tristique dui. Pellentesque facilisis
													justo vitae porta lobortis. In eleifend ex ac ultricies bibendum. Duis in
													leo porttitor, laoreet sapien quis, imperdiet libero. Donec vitae
													tristique nisl. Praesent malesuada, mauris ut tincidunt aliquam, eros
													lectus cursus lectus, nec dictum tellus risus ut turpis. Nam cursus tellus
													lectus, placerat posuere erat dictum in. Donec id nisl ut ligula lobortis
													tempor. Cras ut lobortis massa. In vel ex quis lorem rhoncus convallis.
													Sed accumsan lacus ac euismod volutpat. Cras luctus pharetra lobortis.
												</p>
												<div className='tos-header'>
													<p>VII. NIEDOZWOLONE SPOSOBY KORZYSTANIA Z SERWISU</p>
												</div>
												<p>
													Ut condimentum facilisis ipsum id bibendum. Quisque eget vestibulum nisi,
													malesuada aliquet lorem. Pellentesque sed venenatis ligula, eu facilisis
													magna. Integer maximus purus in fringilla sodales. Morbi vel libero est.
													Aliquam consequat dolor ut pretium efficitur. Integer luctus sem a
													hendrerit luctus. Interdum et malesuada fames ac ante ipsum primis in
													faucibus. Nam fringilla vitae eros ut dignissim. Cras purus lorem,
													dignissim non tempus porta, tristique vitae mi. Proin mollis scelerisque
													dolor ut sagittis. Donec laoreet faucibus elit in tempus. Proin
													sollicitudin semper tellus, sit amet vehicula metus venenatis ac.
													Pellentesque malesuada blandit nisi vitae bibendum. Aliquam aliquam, nulla
													sit amet sodales tempor, turpis enim condimentum eros, quis aliquet magna
													nunc molestie enim. Cras a lobortis dolor, ac faucibus ligula. Maecenas ut
													molestie augue. Donec vehicula orci nec libero blandit gravida. Fusce vel
													eros tincidunt, blandit lacus vitae, tristique dui. Pellentesque facilisis
													justo vitae porta lobortis. In eleifend ex ac ultricies bibendum. Duis in
													leo porttitor, laoreet sapien quis, imperdiet libero. Donec vitae
													tristique nisl. Praesent malesuada, mauris ut tincidunt aliquam, eros
													lectus cursus lectus, nec dictum tellus risus ut turpis. Nam cursus tellus
													lectus, placerat posuere erat dictum in. Donec id nisl ut ligula lobortis
													tempor. Cras ut lobortis massa. In vel ex quis lorem rhoncus convallis.
													Sed accumsan lacus ac euismod volutpat. Cras luctus pharetra lobortis.
												</p>
												<div className='tos-header'>
													<p>VIII. WYŁĄCZENIE ODPOWIEDZIALNOŚCI</p>
												</div>
												<p>
													Ut condimentum facilisis ipsum id bibendum. Quisque eget vestibulum nisi,
													malesuada aliquet lorem. Pellentesque sed venenatis ligula, eu facilisis
													magna. Integer maximus purus in fringilla sodales. Morbi vel libero est.
													Aliquam consequat dolor ut pretium efficitur. Integer luctus sem a
													hendrerit luctus. Interdum et malesuada fames ac ante ipsum primis in
													faucibus. Nam fringilla vitae eros ut dignissim. Cras purus lorem,
													dignissim non tempus porta, tristique vitae mi. Proin mollis scelerisque
													dolor ut sagittis. Donec laoreet faucibus elit in tempus. Proin
													sollicitudin semper tellus, sit amet vehicula metus venenatis ac.
													Pellentesque malesuada blandit nisi vitae bibendum. Aliquam aliquam, nulla
													sit amet sodales tempor, turpis enim condimentum eros, quis aliquet magna
													nunc molestie enim. Cras a lobortis dolor, ac faucibus ligula. Maecenas ut
													molestie augue. Donec vehicula orci nec libero blandit gravida. Fusce vel
													eros tincidunt, blandit lacus vitae, tristique dui. Pellentesque facilisis
													justo vitae porta lobortis. In eleifend ex ac ultricies bibendum. Duis in
													leo porttitor, laoreet sapien quis, imperdiet libero. Donec vitae
													tristique nisl. Praesent malesuada, mauris ut tincidunt aliquam, eros
													lectus cursus lectus, nec dictum tellus risus ut turpis. Nam cursus tellus
													lectus, placerat posuere erat dictum in. Donec id nisl ut ligula lobortis
													tempor. Cras ut lobortis massa. In vel ex quis lorem rhoncus convallis.
													Sed accumsan lacus ac euismod volutpat. Cras luctus pharetra lobortis.
												</p>
												<div className='tos-header'>
													<p>IX. ODPOWIEDZIALNOŚĆ UŻYTKOWNIKA</p>
												</div>
												<p>
													Ut condimentum facilisis ipsum id bibendum. Quisque eget vestibulum nisi,
													malesuada aliquet lorem. Pellentesque sed venenatis ligula, eu facilisis
													magna. Integer maximus purus in fringilla sodales. Morbi vel libero est.
													Aliquam consequat dolor ut pretium efficitur. Integer luctus sem a
													hendrerit luctus. Interdum et malesuada fames ac ante ipsum primis in
													faucibus. Nam fringilla vitae eros ut dignissim. Cras purus lorem,
													dignissim non tempus porta, tristique vitae mi. Proin mollis scelerisque
													dolor ut sagittis. Donec laoreet faucibus elit in tempus. Proin
													sollicitudin semper tellus, sit amet vehicula metus venenatis ac.
													Pellentesque malesuada blandit nisi vitae bibendum. Aliquam aliquam, nulla
													sit amet sodales tempor, turpis enim condimentum eros, quis aliquet magna
													nunc molestie enim. Cras a lobortis dolor, ac faucibus ligula. Maecenas ut
													molestie augue. Donec vehicula orci nec libero blandit gravida. Fusce vel
													eros tincidunt, blandit lacus vitae, tristique dui. Pellentesque facilisis
													justo vitae porta lobortis. In eleifend ex ac ultricies bibendum. Duis in
													leo porttitor, laoreet sapien quis, imperdiet libero. Donec vitae
													tristique nisl. Praesent malesuada, mauris ut tincidunt aliquam, eros
													lectus cursus lectus, nec dictum tellus risus ut turpis. Nam cursus tellus
													lectus, placerat posuere erat dictum in. Donec id nisl ut ligula lobortis
													tempor. Cras ut lobortis massa. In vel ex quis lorem rhoncus convallis.
													Sed accumsan lacus ac euismod volutpat. Cras luctus pharetra lobortis.
												</p>
												<div className='tos-header'>
													<p>X. POSTANOWIENIA KOŃCOWE. PROCEDURA REKLAMACYJNA.</p>
												</div>
												<p>
													Ut condimentum facilisis ipsum id bibendum. Quisque eget vestibulum nisi,
													malesuada aliquet lorem. Pellentesque sed venenatis ligula, eu facilisis
													magna. Integer maximus purus in fringilla sodales. Morbi vel libero est.
													Aliquam consequat dolor ut pretium efficitur. Integer luctus sem a
													hendrerit luctus. Interdum et malesuada fames ac ante ipsum primis in
													faucibus. Nam fringilla vitae eros ut dignissim. Cras purus lorem,
													dignissim non tempus porta, tristique vitae mi. Proin mollis scelerisque
													dolor ut sagittis. Donec laoreet faucibus elit in tempus. Proin
													sollicitudin semper tellus, sit amet vehicula metus venenatis ac.
													Pellentesque malesuada blandit nisi vitae bibendum. Aliquam aliquam, nulla
													sit amet sodales tempor, turpis enim condimentum eros, quis aliquet magna
													nunc molestie enim. Cras a lobortis dolor, ac faucibus ligula. Maecenas ut
													molestie augue. Donec vehicula orci nec libero blandit gravida. Fusce vel
													eros tincidunt, blandit lacus vitae, tristique dui. Pellentesque facilisis
													justo vitae porta lobortis. In eleifend ex ac ultricies bibendum. Duis in
													leo porttitor, laoreet sapien quis, imperdiet libero. Donec vitae
													tristique nisl. Praesent malesuada, mauris ut tincidunt aliquam, eros
													lectus cursus lectus, nec dictum tellus risus ut turpis. Nam cursus tellus
													lectus, placerat posuere erat dictum in. Donec id nisl ut ligula lobortis
													tempor. Cras ut lobortis massa. In vel ex quis lorem rhoncus convallis.
													Sed accumsan lacus ac euismod volutpat. Cras luctus pharetra lobortis.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default ToS;
